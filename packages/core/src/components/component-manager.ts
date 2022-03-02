import { App, Bundle, BundleManager, ComponentDefinition, Data, UiComponentInstantiator, Widget } from "@appkitjs.com/types";
import { TrustedUiComponentInstantiator, UntrustedUiComponentInstantiator } from "../dom";
import { Language } from "../i18n";
import { AppImpl } from "./app-impl";
import { WidgetImpl } from "./widget-impl";

export class ComponentManager {
    private trustedInstantiator = new TrustedUiComponentInstantiator();
    private untrustedInstantiator = new UntrustedUiComponentInstantiator()
    private _hostBuilder: (type: string) => HTMLElement = type => {
        console.log(type);
        const el = document.createElement('div');
        document.body.appendChild(el);
        return el;
    }

    constructor(private bundleManager: BundleManager) { }

    getHostBuilder(): (type: string) => HTMLElement {
        return this._hostBuilder;
    }

    setHostBuilder(builder: (type: string) => HTMLElement) {
        this._hostBuilder = builder;
    }
    
    public buildHost(type: string): HTMLElement {
        return this._hostBuilder(type);
    }

    public resolveAppById(bundleId: string, appId: string): App {
        let app: AppImpl = null;
        this.bundleManager.resolveComponents({type: 'App'}).forEach(e => {
            if (e.bundle.id === bundleId && e.component.id === appId) {
                app = this.buildApp(e.baseUrl, e.bundle, e.component);
            }
        });
        return app;
    }

    public resolveAppsByData(data: Data, actionType: string = 'Share'): App[] {
        let apps: AppImpl[] = [];
        this.bundleManager.resolveComponents({type: 'App', actionFilter: {type: actionType, data}}).forEach(e => {
            apps.push(this.buildApp(e.baseUrl, e.bundle, e.component));
        });
        return apps;
    }

    public resolveWidgetById(bundleId: string, widgetId: string): Widget {
        let widget: WidgetImpl = null;
        this.bundleManager.resolveComponents({type: 'Widget'}).forEach(e => {
            if (e.bundle.id === bundleId && e.component.id === widgetId) {
                widget = this.buildWidget(e.baseUrl, e.bundle, e.component);
            }
        });
        return widget;
    }

    public resolveWidgetsByData(data: Data, actionType: string = 'Share'): Widget[] {
        let widgets: WidgetImpl[] = [];
        this.bundleManager.resolveComponents({type: 'Widget', actionFilter: {type: actionType, data}}).forEach(e => {
            widgets.push(this.buildWidget(e.baseUrl, e.bundle, e.component));
        });
        return widgets;
    }

    private isTrusted(bundle: Bundle): boolean {
        console.info(bundle);
        return true;
    }

    private buildApp(baseUrl: string, bundle: Bundle, component: ComponentDefinition): AppImpl {
        const instantiator = this.resolveInstantiator(this.isTrusted(bundle));
        let name;
        if (typeof component.name === 'string') {
            name = component.name as string;
        } else if (typeof component.name === 'object') {
            name = component.name[Language.resolveLanguage()];
        }
        return new AppImpl(instantiator, this._hostBuilder, baseUrl, bundle, component.id, name, bundle.version);
    }

    private buildWidget(baseUrl: string, bundle: Bundle, component: ComponentDefinition): WidgetImpl {
        const instantiator = this.resolveInstantiator(this.isTrusted(bundle));
        const name = typeof component.name === 'string' ? component.name as string : component.name[Language.resolveLanguage()];
        return new WidgetImpl(instantiator, baseUrl, bundle, component.id, name, bundle.version);
    }

    private resolveInstantiator(trusted: boolean): UiComponentInstantiator {
        return trusted ? this.trustedInstantiator : this.untrustedInstantiator;
    }
}