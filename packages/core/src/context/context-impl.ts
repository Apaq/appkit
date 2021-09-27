import { Action, ComponentInformation, ContentResolver, Context } from "@appkitjs.com/types";
import { SettingsTable } from "@appkitjs.com/types/dist/settings/settings-table";
import { Registry } from "../registry";

/**
 * Default implementation for the Contexts
 */
 export class ContextImpl implements Context {

    constructor(public readonly id: string, 
        private registry: Registry) {}

    public action: Action;
    
    public getContentResolver(): ContentResolver {
        return this.registry.content;
    }

    public getComponents(actionFilter?: Action): ComponentInformation[] {
        let components: ComponentInformation[] = [];
        this.registry.bundles.resolveComponents({actionFilter}).forEach(e => components.push({...e.component, bundleId: e.bundle.id}));
        return components;
    }

    public startApp(bundleId: string, appId: string, action?: Action): void {
        const app = this.registry.components.resolveAppById(bundleId, appId);
        const host = this.registry.components.buildHost('App');
        app.open(host, action);
    }

    getDeviceSettings(): SettingsTable {
        return this.registry.settings.device;
    }

    getSessionSettings(): SettingsTable {
        return this.registry.settings.session;
    }

}
