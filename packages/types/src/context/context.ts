import { ActionFilter } from "../bundle/actionfilter";
import { ContentResolver } from "../content/content-resolver";
import { Data } from "../data";
import { AppManager, WidgetManager } from "../managers";
import { SettingsTable } from "../settings/settings-table";
import { ComponentInformation } from "./component-information";

/**
 * The context that each app can work within.
 * Provides ability to communicate with other apps.
 */
export interface Context {
    readonly id: string;
    getContentResolver(): ContentResolver;
    extensionHandler: (type: string, data: Data) => void

    getComponents(actionFilter?: ActionFilter): ComponentInformation[];
    getApp(actionType: string, data?: Data): AppManager;
    getApp(bundleId: string, appId: string): AppManager;
    
    getWidget(actionType: string, data?: Data): WidgetManager;
    getWidget(bundleId: string, appId: string): WidgetManager;

    getDeviceSettings(): SettingsTable;
    getSessionSettings(): SettingsTable;
}


