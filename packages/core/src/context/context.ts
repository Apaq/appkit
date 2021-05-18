import { ActionFilter } from "../bundle/actionfilter";
import { Component } from "../bundle/component";
import { ContentResolver } from "../content/content-resolver";
import { IData } from "../data";
import { SettingsTable } from "../settings/settings-table";

/**
 * The context that each app can work within.
 * Provides ability to communicate with other apps.
 */
export interface Context {
    readonly id: string;
    getContentResolver(): ContentResolver;
    extensionHandler: (type: string, data: IData) => void

    getComponents(actionFilter?: ActionFilter): Component[];
    startApp(actionType: string, data?: IData): void;
    
    getDeviceSettings(): SettingsTable;
    getSessionSettings(): SettingsTable;
}


