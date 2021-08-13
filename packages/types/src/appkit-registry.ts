import { Bundle } from "./bundle";
import { ContentProvider } from "./content";
import { Data } from "./data";
import { App } from "./components/app";
import { Widget } from "./components/widget";
import { SettingsTable } from "./settings/settings-table";

export interface AppkitRegistry {

    registerProvider(authority: string, contentProvider: ContentProvider<any, any>, discriminator?: string): void;

    registerBundle(bundle: Bundle): void;

    load(...bundleIds: string[]): Promise<void[]>;

    setHostBuilder(builder: (type: string) => HTMLElement): void;

    resolveAppById(bundleId: string, appId: string): App;

    resolveAppsByData(data: Data, actionType?: string): App[] ;

    resolveWidgetById(bundleId: string, widgetId: string): Widget;

    resolveWidgetsByData(data: Data, actionType?: string): Widget[];

    getDeviceSettings(): SettingsTable;

    getSessionSettings(): SettingsTable;

}