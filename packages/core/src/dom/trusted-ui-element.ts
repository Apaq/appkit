import { UiElement } from "@appkitjs.com/types";

/**
 * A trusted UiElement.
 * 
 * All trusted UiElements are added as webcomponents to the current DOM. 
 * There is not special security handling and the webcomponent has access
 * to the DOM as any other elements in the DOM.
 */
export class TrustedUiElement implements UiElement {

    constructor(public nativeElement: HTMLElement) {
    }
}