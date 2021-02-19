import { Bundle } from "./bundle";
import { TrustedUiElement } from "./trusted-ui-element";
import { UiComponentInstantiator } from "./ui-component-instantiator";
import { UiElement } from "./ui-element";

export class TrustedUiComponentInstantiator implements UiComponentInstantiator {
    
    instantiate(bundle: Bundle, id: string): UiElement {
        const el = this.resolveElement(bundle, id);
        document.body.appendChild(el);
        return new TrustedUiElement(el);
    }

    private resolveElement(bundle: Bundle, id: string): HTMLElement {
        const tagName = `${bundle.id}-${id}`;
        const el = document.createElement(tagName);
        return el;
    }
}