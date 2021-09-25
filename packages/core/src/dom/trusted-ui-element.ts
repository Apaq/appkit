import { Action, Context, UiElement } from "@appkitjs.com/types";
import { DataImpl } from "../data";
import { registry } from "../global";

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

    async callExtension(action: Action): Promise<void> {

        if (action && this._context.extensionHandler != null) {
            // Call extensionshandle if registered by now.
            const dataObj = DataImpl.of(action.data);
            this._context.extensionHandler(action.type, dataObj);
        }
    }
    
    get context() {
        return this._context;
    }


}