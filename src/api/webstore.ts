import { App } from "./components/app";
import { Data, IData } from "./components/data";
import { Extension } from "./components/extension";
import { Widget } from "./components/widget";
import { IAcceptFilter } from "./internal/acceptfilter";
import { IBundle } from "./internal/bundle";
import { IComponent } from "./internal/component";

export class Webstore {

    public defaultServer: string = 'https://apaq.github.io/webstore'
    private bundles: IBundle[] = [];

    private buildApp(bundle: IBundle, component: IComponent): App {
        const app = new App();
        app.id = component.id;
        app.bundleId = bundle.id;
        app.name = bundle.name; // TODO
        return app;
    }

    private buildWidget(bundle: IBundle, component: IComponent): Widget {
        const widget = new Widget();
        widget.id = component.id;
        widget.bundleId = bundle.id;
        widget.name = bundle.name; // TODO
        return widget;
    }
/*
    private buildExtension(bundle: IBundle, component: IComponent): Extension {
        // TODO: Figure out how to handle extensions
        if (bundle || component) return null;
        return null;
    }
*/
    private resolveComponentsByType(type: 'App' | 'Widget'): { bundle: IBundle, component: IComponent }[] {
        const components: { bundle: IBundle, component: IComponent }[] = [];
        this.bundles.forEach(bundle => {
            bundle.components.forEach(component => {
                if (component.type === type) {
                    components.push({ bundle, component });
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


    public async loadBundles(...bundleIds: string[]): Promise<void[]> {
        console.log('loading: ', bundleIds);
        const promises: Promise<void>[] = [];
        for (const bundleId of bundleIds) {
            const url = bundleId.match(/(http|https):\/\/.*/) != null ? `${bundleId}/manifest.json` : `${this.defaultServer}/${bundleId}/manifest.json`
            const p = fetch(url).then(response => {
                if (response.status === 200) {
                    return response.json().then(bundle => {
                        this.bundles.push(bundle as IBundle);
                    });
                }
            });
            promises.push(p);
        }

        return Promise.all(promises);
    }

    public resolveAppById(bundleId: string, appId: string): App {
        let app: App = null;
        this.resolveComponentsByType('App').forEach(e => {
            if (e.bundle.id === bundleId && e.component.id === appId) {
                app = this.buildApp(e.bundle, e.component);
            }
        });
        return app;
    }

    public resolveAppsByData(data: IData): App[] {
        let apps: App[] = [];
        this.resolveComponentsByType('App').forEach(e => {

            if (this.filterMatches(data, ...e.component.accepts)) {
                apps.push(this.buildApp(e.bundle, e.component));
            }
        });
        return apps;
    }

    public resolveWidgetById(bundleId: string, widgetId: string): Widget {
        let widget: Widget = null;
        this.resolveComponentsByType('Widget').forEach(e => {
            if (e.bundle.id === bundleId && e.component.id === widgetId) {
                widget = this.buildWidget(e.bundle, e.component);
            }
        });
        return widget;
    }

    public resolveWidgetsByData(data: IData): Widget[] {
        let widgets: Widget[] = [];
        this.resolveComponentsByType('App').forEach(e => {
            if (this.filterMatches(data, ...e.component.accepts)) {
                widgets.push(this.buildWidget(e.bundle, e.component));
            }
        });
        return widgets;
    }

    public resolveExtensionsByData(data: Data): Extension[] {
        // TODO: Figure out how to handle extensions
        if (data) return null;
        return null;
    }
}


