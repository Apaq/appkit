import { Action } from "../components/action";
import { ContentResolver } from "../content/content-resolver";
import { SettingsTable } from "../settings/settings-table";
import { ComponentInformation } from "./component-information";

/**
 * The context that each app can work within.
 * Provides ability to retrieve data and  communicate with other apps.
 */
export interface Context {
    /**
     * The id of this unique context.
     */
    readonly id: string;

    /**
     * The contentresolver for getting access to data supplied by the system.
     */
    getContentResolver(): ContentResolver;

    /**
     * The optional action that may be the target for opening the app.
     */
    action: Action;

    /**
     * Lists installed components that cen be opened.
     * @param actionFilter Optional filter that the returned components must be able to handle.
     */
    getComponents(actionFilter?: Action): ComponentInformation[];

    /**
     * Starts another app.
     * @param bundleId The bundle id of the app.
     * @param appId The id of the app.
     * @param action The optional action the app must handle when it opens.
     */
    startApp(bundleId: string, appId: string, action?: Action): void;

    /**
     * Retrieves access to devices settings.
     */
    getDeviceSettings(): SettingsTable;

    /**
     * Retrieves access to session settings.
     */
    getSessionSettings(): SettingsTable;
}


