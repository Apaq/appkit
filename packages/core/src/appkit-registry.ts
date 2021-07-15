import { AppManager } from "./managers/app-manager";
import { WidgetManager } from "./managers/widget-manager";
import { Config } from "./config";
import { Language } from "./i18n/language";
import { InstantiatorResolver } from "./dom/instantiator-resolver";
import { IData } from "./data";
import { registry } from "./global";
import { BundleManagerImpl, ContentProvider, Bundle, Component } from "./index";
import { SettingsTable } from "./settings/settings-table";

const PATTERN_URL = /(http|https):\/\/.*/;
const PATTERN_RELATIVE_URL = /(\.\/|\.\.\/|\/).*/

/**
 * An appkit registry.
 * 
 * This holds details about all bundles loaded and available for use in the system.
 * It allows for resolving specific Components via bundleid and app id or by listing
 * all components that can open a specific datatype.
 * 
 * A simple sample usage could be like this:
 * const appkit = Appkit();
 * appkit.load('https://my.app.store/super-app-bundle').then(async() => {
 *     const parent = document.body;
 *     const app = appkit.resolveAppManagerById('my', 'app');
 *     const el = await app.open(parent);
 *     el.transmit({uri: 'content://contact/123'});
 * });
 * 
 */
export class AppkitRegistry {

    public config: Config = {
        defaultRepository: 'https://apaq.github.io/appkit',
        trustedRepositories: []
    };

    constructor(private instantiatorResolver: InstantiatorResolver) {
        
    }

    private static resolveBundleBaseUrl(defaultServer: string, bundleId: string) {
        return bundleId.match(PATTERN_URL) != null || bundleId.match(PATTERN_RELATIVE_URL) ? 
            bundleId : `${defaultServer}/${bundleId}`;
    }

    private get bundles(): BundleManagerImpl {
        return registry().bundles as BundleManagerImpl;
    }


    public registerProvider(authority: string, contentProvider: ContentProvider<any, any>) {
        registry().contentProvider.register(authority, contentProvider);
    }

    public registerBundle(bundle: Bundle) {
        this.bundles.addBundle(bundle);
    }

    public async load(...bundleIds: string[]): Promise<void[]> {
        console.log('loading: ', bundleIds);
        const promises: Promise<void>[] = [];
        for (const bundleId of bundleIds) {
            const baseUrl = AppkitRegistry.resolveBundleBaseUrl(this.config.defaultRepository, bundleId)
            const url = `${baseUrl}/manifest.json`
            const p = fetch(url).then(response => {
                if (response.status === 200) {
                    return response.json().then((bundle: Bundle) => {
                        this.bundles.addBundle(bundle, baseUrl);
                    });
                }
            });
            promises.push(p);
        }

        return Promise.all(promises);
    }

    public resolveAppManagerById(bundleId: string, appId: string): AppManager {
        let app: AppManager = null;
        this.bundles.resolveComponents({type: 'App'}).forEach(e => {
            if (e.bundle.id === bundleId && e.component.id === appId) {
                app = this.buildApp(e.baseUrl, e.bundle, e.component);
            }
        });
        return app;
    }

    public resolveAppManagersByData(data: IData, actionType: string = 'Share'): AppManager[] {
        let apps: AppManager[] = [];
        this.bundles.resolveComponents({type: 'App', actionFilter: {type: actionType, data}}).forEach(e => {
            apps.push(this.buildApp(e.baseUrl, e.bundle, e.component));
        });
        return apps;
    }

    public resolveWidgetManagerById(bundleId: string, widgetId: string): WidgetManager {
        let widget: WidgetManager = null;
        this.bundles.resolveComponents({type: 'Widget'}).forEach(e => {
            if (e.bundle.id === bundleId && e.component.id === widgetId) {
                widget = this.buildWidget(e.baseUrl, e.bundle, e.component);
            }
        });
        return widget;
    }

    public resolveWidgetManagersByData(data: IData, actionType: string = 'Share'): WidgetManager[] {
        let widgets: WidgetManager[] = [];
        this.bundles.resolveComponents({type: 'Widget', actionFilter: {type: actionType, data}}).forEach(e => {
            widgets.push(this.buildWidget(e.baseUrl, e.bundle, e.component));
        });
        return widgets;
    }

    
    public getDeviceSettings(): SettingsTable {
        return registry().settings.device;
    }

    public getSessionSettings(): SettingsTable {
        return registry().settings.session;
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

    private buildApp(baseUrl: string, bundle: Bundle, component: Component): AppManager {
        const instantiator = this.instantiatorResolver.resolve(this.isTrusted(bundle));
        let name;
        if (typeof component.name === 'string') {
            name = component.name as string;
        } else if (typeof component.name === 'object') {
            name = component.name[Language.resolveLanguage()];
        }
        return new AppManager(instantiator, baseUrl, bundle, component.id, name, bundle.version);
    }

    private buildWidget(baseUrl: string, bundle: Bundle, component: Component): WidgetManager {
        const instantiator = this.instantiatorResolver.resolve(this.isTrusted(bundle));
        const name = typeof component.name === 'string' ? component.name as string : component.name[Language.resolveLanguage()];
        return new WidgetManager(instantiator, baseUrl, bundle, component.id, name, bundle.version);
    }

}


