import { IData, Data } from "../data";
import { registry } from "../global";
import { Context } from "../index";
import { Logger } from "../logger";
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
    
    constructor(public nativeElement: HTMLElement) { }

    async callExtension(type: string, data: IData): Promise<void> {
        const context = await this.whenInitialized();

        if (data && context.extensionHandler != null) {
            const dataObj = Data.of(data);
            context.extensionHandler(type, dataObj);
        }
    }
    
    async whenInitialized(): Promise<Context> {
        await customElements.whenDefined(this.nativeElement.tagName.toLowerCase());

        return new Promise((resolve, reject) => {
            const start = Date.now();
            const interval = setInterval(() => {
                const id = this.nativeElement.getAttribute('context-id');
                if(id != null) {
                    const ctx = registry().contexts.get(id);
                    if(ctx != null) {
                        Logger.info('Context found');
                        this._context = ctx;
                        clearInterval(interval);
                        resolve(ctx);
                        return;
                    } 
                } 
                
                if(Date.now() - start > 5000) {
                    clearInterval(interval);
                    reject('Not initialized within timeout period.');
                    return;
                }
                // keep on waiting
            }
            ,10);
        });
    }
    
    get context() {
        return this._context;
    }
}