import { ContentResolver } from "../content/content-resolver";
import { Context } from "./context";
import { IData } from "../data";
import { ActionFilter } from "../bundle/actionfilter";
import { SettingsTable } from "../settings/settings-table";
import { Registry } from "../registry";
import { ComponentInformation } from "./component-information";

/**
 * Default implementation for the Contexts
 */
 export class ContextImpl implements Context {
    private _extensionHandler: ((type: string, data: IData) => void | IData);

    constructor(public readonly id: string, 
        private registry: Registry) {}

    public getContentResolver(): ContentResolver {
        return this.registry.content;
    }

    public set extensionHandler(receiver: (type: string, data: IData) => void) {
        this._extensionHandler = receiver;
    }

    public get extensionHandler(): (type: string, data: IData) => void {
        return this._extensionHandler;
    }

    public getComponents(actionFilter?: ActionFilter): ComponentInformation[] {
        let components: ComponentInformation[] = [];
        this.registry.bundles.resolveComponents({actionFilter}).forEach(e => components.push({...e.component, bundleId: e.bundle.id}));
        return components;
    }

    public startApp(actionType: string, data?: IData): void {
        console.log(actionType, data);
        throw new Error("Method not implemented.");
    }
    
    getDeviceSettings(): SettingsTable {
        return this.registry.settings.device;
    }

    getSessionSettings(): SettingsTable {
        return this.registry.settings.session;
    }

}
