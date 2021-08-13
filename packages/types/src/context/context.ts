import { ActionFilter } from "../bundle/actionfilter";
import { ContentResolver } from "../content/content-resolver";
import { Data } from "../data";
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
    startApp(bundleId: string, appId: string): void;

    getDeviceSettings(): SettingsTable;
    getSessionSettings(): SettingsTable;
}


