import { App, Bundle, BundleManager, ComponentDefinition, Data, UiComponentInstantiator, Widget, HostBuilder } from "@appkitjs.com/types";
import { TrustedUiComponentInstantiator } from "../dom";
import { Language } from "../i18n";
import { AppImpl } from "./app-impl";
import { WidgetImpl } from "./widget-impl";

class DefaultHostBuilder implements HostBuilder {
    async construct(type: string): Promise<HTMLElement> {
        console.log(type);
        const el = document.createElement('div');
        document.body.appendChild(el);
        return el;
    }

    async destruct(element: HTMLElement): Promise<void> {
        console.log('Destructing: ', element);
    }

}

export class ComponentManager {
    private trustedInstantiator = new TrustedUiComponentInstantiator();
    private _hostBuilder = new DefaultHostBuilder();

    constructor(private bundleManager: BundleManager) { }

    getHostBuilder(): HostBuilder {
        return this._hostBuilder;
    }

    setHostBuilder(builder: HostBuilder) {
        this._hostBuilder = builder;
    }
    
    public async buildHost(type: string): Promise<HTMLElement> {
        return await this._hostBuilder.construct(type);
    }

    public resolveApp(prefix: string, appId: string): App {
        let app: AppImpl = null;
        this.bundleManager.resolveComponents({type: 'App'}).forEach(e => {
            if (e.bundle.prefix === prefix && e.component.id === appId) {
                app = this.buildApp(e.bundle, e.component);
            }
        });
        return app;
    }

    public resolveApps(): App[] {
        let apps: AppImpl[] = [];
        this.bundleManager.resolveComponents({type: 'App'}).forEach(e => {
            apps.push(this.buildApp(e.bundle, e.component));
        });
        return apps;
    }

    public resolveAppsByData(data: Data, actionType: string = 'Share'): App[] {
        let apps: AppImpl[] = [];
        this.bundleManager.resolveComponents({type: 'App', actionFilter: {type: actionType, data}}).forEach(e => {
            apps.push(this.buildApp(e.bundle, e.component));
        });
        return apps;
    }

    public resolveWidgetById(prefix: string, widgetId: string): Widget {
        let widget: WidgetImpl = null;
        this.bundleManager.resolveComponents({type: 'Widget'}).forEach(e => {
            if (e.bundle.prefix === prefix && e.component.id === widgetId) {
                widget = this.buildWidget(e.bundle, e.component);
            }
        });
        return widget;
    }

    public resolveWidgets(): Widget[] {
        let widgets: WidgetImpl[] = [];
        this.bundleManager.resolveComponents({type: 'Widget'}).forEach(e => {
            widgets.push(this.buildWidget(e.bundle, e.component));
        });
        return widgets;
    }

    public resolveWidgetsByData(data: Data, actionType: string = 'Share'): Widget[] {
        let widgets: WidgetImpl[] = [];
        this.bundleManager.resolveComponents({type: 'Widget', actionFilter: {type: actionType, data}}).forEach(e => {
            widgets.push(this.buildWidget(e.bundle, e.component));
        });
        return widgets;
    }

    private isTrusted(bundle: Bundle): boolean {
        console.info(bundle);
        return true;
    }

    private buildApp(bundle: Bundle, component: ComponentDefinition): AppImpl {
        const instantiator = this.resolveInstantiator(this.isTrusted(bundle));
        let name;
        if (typeof component.name === 'string') {
            name = component.name as string;
        } else if (typeof component.name === 'object') {
            name = component.name[Language.resolveLanguage()];
        }
        return new AppImpl(instantiator, this._hostBuilder, bundle, component.id, name);
    }

    private buildWidget(bundle: Bundle, component: ComponentDefinition): WidgetImpl {
        const instantiator = this.resolveInstantiator(this.isTrusted(bundle));
        const name = typeof component.name === 'string' ? component.name as string : component.name[Language.resolveLanguage()];
        return new WidgetImpl(instantiator, bundle, component.id, name);
    }

    private resolveInstantiator(trusted: boolean): UiComponentInstantiator {
        if(!trusted) throw new Error('Only trusted apps supported.');
        return this.trustedInstantiator;
    }
}