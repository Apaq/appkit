import { ActionFilter, AppManager, ComponentInformation, ContentResolver, Context, Data, WidgetManager } from "@appkitjs.com/types";
import { SettingsTable } from "@appkitjs.com/types/dist/settings/settings-table";
import { Registry } from "../registry";

/**
 * Default implementation for the Contexts
 */
 export class ContextImpl implements Context {
    private _extensionHandler: ((type: string, data: Data) => void | Data);

    constructor(public readonly id: string, 
        private registry: Registry) {}

    public getContentResolver(): ContentResolver {
        return this.registry.content;
    }

    public set extensionHandler(receiver: (type: string, data: Data) => void) {
        this._extensionHandler = receiver;
    }

    public get extensionHandler(): (type: string, data: Data) => void {
        return this._extensionHandler;
    }

    public getComponents(actionFilter?: ActionFilter): ComponentInformation[] {
        let components: ComponentInformation[] = [];
        this.registry.bundles.resolveComponents({actionFilter}).forEach(e => components.push({...e.component, bundleId: e.bundle.id}));
        return components;
    }

    public getApp(actionType: string, data?: Data): AppManager;
    public getApp(bundleId: string, appId: string): AppManager;

    public getApp(bundleIdOrAction: string, appIdOrData: string | Data): AppManager {
        console.log(bundleIdOrAction, appIdOrData);
        throw new Error("Method not implemented.");

        // TO fix this we need to move logic from AppRegistryImpl for creating apps and 
        // widgets to a better place.
    }

    public getWidget(actionType: string, data?: Data): WidgetManager;
    public getWidget(bundleId: string, appId: string): WidgetManager;

    public getWidget(bundleIdOrAction: string, appIdOrData: string | Data): WidgetManager {
        console.log(bundleIdOrAction, appIdOrData);
        throw new Error("Method not implemented.");
    }
    
    getDeviceSettings(): SettingsTable {
        return this.registry.settings.device;
    }

    getSessionSettings(): SettingsTable {
        return this.registry.settings.session;
    }

}
