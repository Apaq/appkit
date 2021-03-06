import { Bundle } from "../bundle/bundle";
import { UiComponentInstantiator } from "../dom/ui-component-instantiator";
import { UiElement } from "../dom/ui-element";
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

    public async open(parentElement?: HTMLElement): Promise<UiElement> {
        // TODO: Open app in overlay.
        // There should be a way to select the type of overlay: 
        // * Dialog
        // * popover
        // * Full screen modal
        // * Existing element
        // * etc.

        if(!parentElement) {
            parentElement = document.body;
        }

        const uiElement = await this.instantiator.instantiate(this.baseUrl, this.bundle, this.id, true);
        parentElement.appendChild(uiElement.nativeElement)

        return Promise.resolve(uiElement);
    }



}