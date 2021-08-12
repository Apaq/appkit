import { UiElement } from "../dom/ui-element";
import { UiComponentManager } from "./ui-component-manager";

/**
 * A Manager for a specific app.
 * 
 * In order to open an app, an AppManager has to be retrieved from Appkit registry.
 * Having the AppManager allows to open the app.s
 */
export interface AppManager extends UiComponentManager {

   open(parentElement?: HTMLElement): Promise<UiElement>;

}