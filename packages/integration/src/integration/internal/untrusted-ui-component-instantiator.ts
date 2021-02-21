import { Bundle } from "./bundle";
import { UiComponentInstantiator } from "./ui-component-instantiator";
import { UiElement } from "./ui-element";

export class UntrustedUiComponentInstantiator implements UiComponentInstantiator {
    instantiate(baseUrl: string, bundle: Bundle, id: string): UiElement {
        throw new Error("Method not implemented." + baseUrl +  bundle + id);
    }

}