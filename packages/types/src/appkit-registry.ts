import { Bundle } from "./bundle";
import { Data } from "./data";
import { App } from "./components/app";
import { Widget } from "./components/widget";
import { SettingsTable } from "./settings/settings-table";
import { CrudRepository } from "@apaq/leap-data-core";

export interface AppkitRegistry {

    registerProvider(authority: string, contentProvider: CrudRepository<any, any>, discriminator?: string): void;

    registerBundle(bundle: Bundle): void;

    load(...bundleIds: string[]): Promise<void[]>;

    hostBuilder: (type: string) => HTMLElement;

    resolveAppById(bundleId: string, appId: string): App;

    resolveAppsByData(data: Data, actionType?: string): App[] ;

    resolveWidgetById(bundleId: string, widgetId: string): Widget;

    resolveWidgetsByData(data: Data, actionType?: string): Widget[];

    getDeviceSettings(): SettingsTable;

    getSessionSettings(): SettingsTable;

}