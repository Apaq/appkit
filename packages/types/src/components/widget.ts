import { Data } from "../data";
import { UiComponent } from "./ui-component";

export interface Widget extends UiComponent {

    instantiate(parentElement: HTMLElement, data?: Data): Promise<HTMLElement> ;

}