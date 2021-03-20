import { Bundle } from "../bundle/bundle";
import { UiComponentInstantiator } from "../dom/ui-component-instantiator";
import { UiElement } from "../dom/ui-element";
import { UiComponentManager } from "./ui-component-manager";

/**
 * A Manager for a specific app.
 * 
 * In order to open an app, an AppManager has to be retrieved from Appkit registry.
 * Having the AppManager allows to open the app.s
 */
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
        if(!parentElement) {
            parentElement = document.body;
        }

        const uiElement = await this.instantiator.instantiate(this.baseUrl, this.bundle, this.id, true);
        parentElement.appendChild(uiElement.nativeElement)

        return Promise.resolve(uiElement);
    }



}