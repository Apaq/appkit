import { Data, IData } from "@webstore/core";
import { Bundle } from "../internal/bundle";
import { UiComponentInstantiator } from "../internal/ui-component-instantiator";
import { UiElement } from "../internal/ui-element";
import { UiComponentManager } from "./ui-component-manager";

export class AppManager extends UiComponentManager {
    
    constructor(
        instantiator: UiComponentInstantiator, 
        baseUrl: string,
        bundle: Bundle, 
        id: string, 
        name: string, 
        version: string) {
        super(instantiator, baseUrl, bundle, id, name, version);
    }

    public async open(data?: IData): Promise<UiElement> {
        // TODO: Open app in overlay.
        // There should be a way to select the type of overlay: 
        // * Dialog
        // * popover
        // * Full screen modal
        // * Existing element
        // * etc.

    const uiElement = await this.instantiator.instantiate(this. baseUrl, this.bundle, this.id);
        document.body.appendChild(uiElement.nativeElement)
        const context = await uiElement.whenInitialized();

        if(data && context.receiver != null) {
            const dataObj = Data.of(data);
            context.receiver(dataObj);
        }
        return Promise.resolve(uiElement);
    }

    

}