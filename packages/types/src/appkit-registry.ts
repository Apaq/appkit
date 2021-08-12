import { Bundle } from "./bundle";
import { ContentProvider } from "./content";
import { Data } from "./data";
import { AppManager } from "./managers/app-manager";
import { WidgetManager } from "./managers/widget-manager";
import { SettingsTable } from "./settings/settings-table";

export interface AppkitRegistry {

    registerProvider(authority: string, contentProvider: ContentProvider<any, any>, discriminator?: string): void;

    registerBundle(bundle: Bundle): void;

    load(...bundleIds: string[]): Promise<void[]> ;

    resolveAppManagerById(bundleId: string, appId: string): AppManager;

    resolveAppManagersByData(data: Data, actionType?: string): AppManager[] ;

    resolveWidgetManagerById(bundleId: string, widgetId: string): WidgetManager;

    resolveWidgetManagersByData(data: Data, actionType?: string): WidgetManager[];

    getDeviceSettings(): SettingsTable;

    getSessionSettings(): SettingsTable;

}