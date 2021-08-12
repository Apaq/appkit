import { Data } from "../data";
import { UiComponentManager } from "./ui-component-manager";

export interface WidgetManager extends UiComponentManager {

    instantiate(parentElement: HTMLElement, data?: Data): Promise<HTMLElement> ;

}