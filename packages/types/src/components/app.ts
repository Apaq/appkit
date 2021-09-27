import { Action } from "..";
import { UiElement } from "../dom/ui-element";
import { UiComponent } from "./ui-component";

/**
 * A Manager for a specific app.
 * 
 * In order to open an app, an AppManager has to be retrieved from Appkit registry.
 * Having the AppManager allows to open the app.s
 */
export interface App extends UiComponent {

   open(parentElement?: HTMLElement, action?: Action): Promise<UiElement>;

}