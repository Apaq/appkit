import { IData, Data } from "../data";
import { registry } from "../global";
import { Context } from "../index";
import { UiElement } from "./ui-element";

/**
 * A trusted UiElement.
 * 
 * All trusted UiElements are added as webcomponents to the current DOM. 
 * There is not special security handling and the webcomponent has access
 * to the DOM as any other elements in the DOM.
 */
export class TrustedUiElement implements UiElement {

    private _context: Context;
    
    constructor(public nativeElement: HTMLElement) {
        const existingContextId = this.nativeElement.getAttribute('context-id');
        this._context = registry().contexts.get(existingContextId);
     }

    async callExtension(type: string, data: IData): Promise<void> {

        if (data && this._context.extensionHandler != null) {
            // Call extensionshandle if registered by now.
            const dataObj = Data.of(data);
            this._context.extensionHandler(type, dataObj);
        }
    }
    
    get context() {
        return this._context;
    }


}