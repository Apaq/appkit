import { IData } from "@webstore/core";
import { UiComponentManager } from "./ui-component-manager";

export class WidgetManager extends UiComponentManager {

    public async instantiate(parentElement: HTMLElement, data?: IData): Promise<HTMLElement> {
        // TODO: We should have support for inserting into an element
        if (parentElement || data) return null;
        return null;
    }

}