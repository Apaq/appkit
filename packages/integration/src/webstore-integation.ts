import { ContentProviderRegistry, ContextManager, Webstore } from "@webstore/core";

/**
 * This describes thre interface for the globel webstore variable.
 */
export interface WebstoreIntegration extends Webstore {
    
}

/**
 * This sets up the global webstore variable
 */
declare var __webstore__: WebstoreIntegration
if(!__webstore__) {
    __webstore__ = {contexts: null, content: null, contentProvider: null}
}
__webstore__.contexts = new ContextManager();
__webstore__.contentProvider = new ContentProviderRegistry();


/**
 * This exports the global webstore variable for other files to import.
 */
declare var window: {__webstore__: WebstoreIntegration}
export function webstore(): WebstoreIntegration { return window.__webstore__; }