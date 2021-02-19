import { Data, IData } from "@webstore/core";
import { UiElement } from "../internal/ui-element";
import { UiComponentManager } from "./ui-component-manager";

export class AppManager extends UiComponentManager {
    
    _element: HTMLElement;

    

    public async open(data?: IData): Promise<UiElement> {
        // TODO: Open app in overlay.
        // There should be a way to select the type of overlay: 
        // * Dialog
        // * popover
        // * Full screen modal
        // * Existing element
        // * etc.

        if(data) {
            const dataObj = Data.of(data);
            if (data || dataObj) return null;
        }

        // TODO: Move instantiation to instantiator
        //const uiElement = this.instantiator.instantiate(this.bundle, this.id);
        
        return Promise.resolve(null);
    }

}