import { TrustedUiElement } from "./trusted-ui-element";
import { Action, Bundle, UiComponentInstantiator, UiElement } from "@appkitjs.com/types";

/**
 * A trusted UiComponentInstantiator.
 *
 * This instantiator handles trusted instantiation of UiComponents (Apps and Widgets,
 * but not extensions). It does so by adding the script to the app bundle to the
 * <head> of the current page. The script for a bundle will only be added once even
 * if the same app is instantiated multiple times.
 *
 * If specified, styles for the app is also added to the header.
 */
export class TrustedUiComponentInstantiator implements UiComponentInstantiator {

    constructor() {
    }

    async construct(bundle: Bundle, id: string, singleElement: boolean): Promise<UiElement> {
        const tagName = `${bundle.prefix}-${id}`;
        const existingTags = document.getElementsByTagName(tagName);
        let el: HTMLElement;
        if(singleElement && existingTags.length > 0) {
            el = existingTags[0] as HTMLElement;
        } else {
            el = document.createElement(tagName);
        }

        return Promise.resolve(new TrustedUiElement(el));
    }

    async bootstrap(element: UiElement, action?: Action): Promise<void> {
        await customElements.whenDefined(element.nativeElement.tagName.toLowerCase());
        (element.nativeElement as any).action = action;
    }

    async destruct(element: UiElement) {
        element.nativeElement.parentElement.removeChild(element.nativeElement);
    }

}
