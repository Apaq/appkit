import { Context, Data, IData, Logger } from "@webstore/core";
import { IntegrationManagerReference } from "./integration-manager-reference";
import { UiElement } from "./ui-element";

declare var __webstore__: IntegrationManagerReference;

export class TrustedUiElement implements UiElement {

    private _context: Context;
    
    constructor(public nativeElement: HTMLElement) { }

    async transmit(data: IData): Promise<void> {
        const context = await this.whenInitialized();

        if (data && context.receiver != null) {
            const dataObj = Data.of(data);
            context.receiver(dataObj);
        }
    }
    
    async whenInitialized(): Promise<Context> {
        await customElements.whenDefined(this.nativeElement.tagName.toLowerCase());

        return new Promise((resolve, reject) => {
            const start = Date.now();
            const interval = setInterval(() => {
                const id = this.nativeElement.getAttribute('context-id');
                if(id != null) {
                    const ctx = __webstore__.contexts.get(id);
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