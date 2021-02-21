import { AppManager } from "./components/app-manager";
import { Data, IData } from "@webstore/core";
import { ExtensionManager } from "./components/extension-manager";
import { WidgetManager } from "./components/widget-manager";
import { IAcceptFilter } from "./internal/acceptfilter";
import { Bundle } from "./internal/bundle";
import { IComponent } from "./internal/component";
import { Config } from "./internal/config";
import { Language } from "./internal/language";
import { TrustedUiComponentInstantiator } from "./internal/trusted-ui-component-instantiator";
import { UntrustedUiComponentInstantiator } from "./internal/untrusted-ui-component-instantiator";

const PATTERN_URL = /(http|https):\/\/.*/;
export class BundleManager {

    public config: Config = {
        defaultRepository: 'https://apaq.github.io/webstore',
        trustedRepositories: []
    };

    private bundles: { baseUrl: string, bundle: Bundle }[] = [];


    constructor() {
        this.bundles.push({
            baseUrl: null,
            bundle: {
                id: 'my',
                name: 'My Component',
                components: [
                    {
                        id: 'component',
                        type: 'App'
                    }
                ],

            } as Bundle
        })
    }

    public static resolveBundleBaseUrl(defaultServer: string, bundleId: string) {
        return bundleId.match(PATTERN_URL) != null ? bundleId : `${defaultServer}/${bundleId}`;
    }



    public async load(...bundleIds: string[]): Promise<void[]> {
        console.log('loading: ', bundleIds);
        const promises: Promise<void>[] = [];
        for (const bundleId of bundleIds) {
            const baseUrl = BundleManager.resolveBundleBaseUrl(this.config.defaultRepository, bundleId)
            const url = `${baseUrl}/manifest.json`
            const p = fetch(url).then(response => {
                if (response.status === 200) {
                    return response.json().then((bundle: Bundle) => {
                        this.bundles.push({ baseUrl, bundle: bundle as Bundle });
                    });
                }
            });
            promises.push(p);
        }

        return Promise.all(promises);
    }

    public resolveAppManagerById(bundleId: string, appId: string): AppManager {
        let app: AppManager = null;
        this.resolveComponentsByType('App').forEach(e => {
            if (e.bundle.id === bundleId && e.component.id === appId) {
                app = this.buildApp(e.baseUrl, e.bundle, e.component);
            }
        });
        return app;
    }

    public resolveAppManagersByData(data: IData): AppManager[] {
        let apps: AppManager[] = [];
        this.resolveComponentsByType('App').forEach(e => {

            if (this.filterMatches(data, ...e.component.accepts)) {
                apps.push(this.buildApp(e.baseUrl, e.bundle, e.component));
            }
        });
        return apps;
    }

    public resolveWidgetManagerById(bundleId: string, widgetId: string): WidgetManager {
        let widget: WidgetManager = null;
        this.resolveComponentsByType('Widget').forEach(e => {
            if (e.bundle.id === bundleId && e.component.id === widgetId) {
                widget = this.buildWidget(e.baseUrl, e.bundle, e.component);
            }
        });
        return widget;
    }

    public resolveWidgetManagersByData(data: IData): WidgetManager[] {
        let widgets: WidgetManager[] = [];
        this.resolveComponentsByType('App').forEach(e => {
            if (this.filterMatches(data, ...e.component.accepts)) {
                widgets.push(this.buildWidget(e.baseUrl, e.bundle, e.component));
            }
        });
        return widgets;
    }

    public resolveExtensionsByData(data: Data): ExtensionManager[] {
        // TODO: Figure out how to handle extensions
        if (data) return null;
        return null;
    }


    private isTrusted(bundle: Bundle) {
        if (bundle.id.match(PATTERN_URL) == null) {
            // If loaded from default, then it is trusted.
            return true;
        }

        for (let repo of this.config.trustedRepositories) {
            // If bundle points to a trusted repo, then it is trusted.
            if (bundle.id.startsWith(repo)) {
                return true;
            }
        }
        return false;
    }

    private buildApp(baseUrl: string, bundle: Bundle, component: IComponent): AppManager {
        const instantiator = this.isTrusted(bundle) ? new TrustedUiComponentInstantiator(this.config) : new UntrustedUiComponentInstantiator();
        const name = typeof component.name === 'string' ? bundle.name as string : bundle.name[Language.resolveLanguage()];
        return new AppManager(instantiator, baseUrl, bundle, component.id, name, bundle.version);
    }

    private buildWidget(baseUrl: string, bundle: Bundle, component: IComponent): WidgetManager {
        const instantiator = this.isTrusted(bundle) ? new TrustedUiComponentInstantiator(this.config) : new UntrustedUiComponentInstantiator();
        const name = typeof component.name === 'string' ? bundle.name as string : bundle.name[Language.resolveLanguage()];
        return new WidgetManager(instantiator, baseUrl, bundle, component.id, name, bundle.version);
    }
    /*
        private buildExtension(bundle: IBundle, component: IComponent): Extension {
            // TODO: Figure out how to handle extensions
            if (bundle || component) return null;
            return null;
        }
    */


    private resolveComponentsByType(type: 'App' | 'Widget'): { baseUrl: string, bundle: Bundle, component: IComponent }[] {
        const components: { baseUrl: string, bundle: Bundle, component: IComponent }[] = [];
        this.bundles.forEach(entry => {
            entry.bundle.components.forEach(component => {
                if (component.type === type) {
                    components.push({ baseUrl: entry.baseUrl, bundle: entry.bundle, component });
                }
            })
        });
        return components;
    }

    private filterMatches(data: IData, ...filter: IAcceptFilter[]): boolean {
        // TODO: Handle filter
        if (filter || data) return true;
        return true;
    }
}


