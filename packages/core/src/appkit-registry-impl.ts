import { Config } from "./config";
import { registry } from "./global";
import { AppkitRegistry, Bundle, Data, Widget, App } from "@appkitjs.com/types";
import { BundleManagerImpl } from "./bundle";
import { SettingsTable } from "../../types/dist/settings/settings-table";
import { ComponentManager } from "./components/component-manager";
import { CrudRepository } from "@apaq/leap-data-core";
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
export class AppkitRegistryImpl implements AppkitRegistry {

    public config: Config = {
        defaultRepository: 'https://apaq.github.io/appkit',
        trustedRepositories: []
    };

    private static resolveBundleBaseUrl(defaultServer: string, bundleId: string) {
        return bundleId.match(PATTERN_URL) != null || bundleId.match(PATTERN_RELATIVE_URL) ? 
            bundleId : `${defaultServer}/${bundleId}`;
    }

    private get bundles(): BundleManagerImpl {
        return registry().bundles as BundleManagerImpl;
    }

    private get components(): ComponentManager {
        return registry().components;
    }

    public setHostBuilder(builder: (type: string) => HTMLElement) {
        this.components.setHostBuilder(builder);
    }

    public registerProvider(authority: string, contentProvider: CrudRepository<any, any>, discriminator?: string) {
        registry().contentProvider.register(authority, contentProvider, discriminator);
    }

    public registerBundle(bundle: Bundle) {
        this.bundles.addBundle(bundle);
    }

    public async load(...bundleIds: string[]): Promise<void[]> {
        console.log('loading: ', bundleIds);
        const promises: Promise<void>[] = [];
        for (const bundleId of bundleIds) {
            const baseUrl = AppkitRegistryImpl.resolveBundleBaseUrl(this.config.defaultRepository, bundleId)
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

    public resolveAppById(bundleId: string, appId: string): App {
        return this.components.resolveAppById(bundleId, appId);
    }

    public resolveAppsByData(data: Data, actionType: string = 'Share'): App[] {
        return this.components.resolveAppsByData(data, actionType);
    }

    public resolveWidgetById(bundleId: string, widgetId: string): Widget {
        return this.components.resolveWidgetById(bundleId, widgetId);
    }

    public resolveWidgetsByData(data: Data, actionType: string = 'Share'): Widget[] {
        return this.components.resolveWidgetsByData(data, actionType);
    }

    
    public getDeviceSettings(): SettingsTable {
        return registry().settings.device;
    }

    public getSessionSettings(): SettingsTable {
        return registry().settings.session;
    }

    /*private isTrusted(bundle: Bundle) {
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
    }*/

}


