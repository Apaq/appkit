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

    private getLanguage(): string {
        return 'en';
    }

    private buildApp(bundle: IBundle, component: IComponent): App {
        const app = new App();
        app.id = component.id;
        app.bundleId = bundle.id;

        if(typeof component.name === 'string') {
            app.name = bundle.name as string;
        } else {
            app.name = bundle.name[this.getLanguage()];
        }
        
        return app;
    }

    private buildWidget(bundle: IBundle, component: IComponent): Widget {
        const widget = new Widget();
        widget.id = component.id;
        widget.bundleId = bundle.id;
        if(typeof component.name === 'string') {
            widget.name = bundle.name as string;
        } else {
            widget.name = bundle.name[0];
        }
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
            const baseUrl = bundleId.match(/(http|https):\/\/.*/) != null ? bundleId : `${this.defaultServer}/${bundleId}`
            const url = `${baseUrl}/manifest.json`
            const p = fetch(url).then(response => {
                if (response.status === 200) {
                    return response.json().then((bundle: IBundle) => {
                        // TODO: Should be able to isolate component in iframe
                        const jsFile = bundle.jsFile != null ? bundle.jsFile : 'main.js';
                        const cssFile = bundle.cssFile != null ? bundle.cssFile : null;
                        const lang = this.getLanguage();
                        
                        // Adds script
                        let scriptUrl = !bundle.localize ? `${baseUrl}/${jsFile}`: `${baseUrl}/${lang}/${jsFile}`;
                        const scriptEl = document.createElement('script');
                        //scriptEl.setAttribute("type", "module");
                        scriptEl.setAttribute("src", scriptUrl);
                        document.head.appendChild(scriptEl);

                        // Add styles
                        if(cssFile != null) {
                            const styleUrl = !bundle.localize ? `${baseUrl}/${cssFile}`: `${baseUrl}/${lang}/${cssFile}`;
                            const styleEl = document.createElement('link');
                            styleEl.setAttribute('rel', 'stylesheet');
                            styleEl.setAttribute('type', 'text/css');
                            styleEl.setAttribute('href', styleUrl);
                            document.head.appendChild(styleEl);
                        }

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


