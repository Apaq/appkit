import { registry } from "./global";
import {AppkitRegistry, Bundle, Data, Widget, App, HostBuilder} from "@appkitjs.com/types";
import { BundleManagerImpl } from "./bundle";
import { ComponentManager } from "./components/component-manager";

/**
 * An appkit registry.
 *
 * This holds details about all bundles loaded and available for use in the system.
 * It allows for resolving specific Components via bundleid and app id or by listing
 * all components that can open a specific datatype.
 *
 * A simple sample usage could be like this:
 * 
 * const appkit = Appkit();
 * 
 * appkit.registerBundle({ // Register app
 *  prefix:'my', 
 *  components: [
 *    id: 'app',
 *    type: 'App'
 *  ]
 * });
 * 
 * const parent = document.body;
 * const app = appkit.resolveAppManagerById('my', 'app');
 * const el = await app.open(parent); // Open app
 *
 */
export class AppkitRegistryImpl implements AppkitRegistry {

    private get bundles(): BundleManagerImpl {
        return registry().bundles as BundleManagerImpl;
    }

    private get components(): ComponentManager {
        return registry().components;
    }
    
    public get hostBuilder(): HostBuilder {
        return this.components.getHostBuilder();
    }

    public set hostBuilder(builder: HostBuilder) {
        this.components.setHostBuilder(builder);
    }

    public registerBundle(bundle: Bundle) {
        this.bundles.addBundle(bundle);
    }

    public resolveAppById(prefix: string, appId: string): App {
        return this.components.resolveApp(prefix, appId);
    }

    public resolveApps(): App[] {
        return this.components.resolveApps();
    }

    public resolveAppsByData(data: Data, actionType: string = 'Share'): App[] {
        return this.components.resolveAppsByData(data, actionType);
    }

    public resolveWidgetById(prefix: string, widgetId: string): Widget {
        return this.components.resolveWidgetById(prefix, widgetId);
    }

    public resolveWidgets(): Widget[] {
        return this.components.resolveWidgets();
    }

    public resolveWidgetsByData(data: Data, actionType: string = 'Share'): Widget[] {
        return this.components.resolveWidgetsByData(data, actionType);
    }

}


