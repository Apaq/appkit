import { ContentProviderRegistry } from "./content-provider-registry";
import { ContentResolver } from "./content-resolver";
import { ContextManager } from "./context-manager";

export interface Webstore {
    contexts: ContextManager;
    content: ContentResolver;
    contentProvider: ContentProviderRegistry;
}

/**
 * This sets up the global webstore variable
 */
declare var __webstore__: Webstore
if(!__webstore__) {
    __webstore__ = {contexts: null, content: null, contentProvider: null}
}
__webstore__.contexts = new ContextManager();
__webstore__.contentProvider = new ContentProviderRegistry();


/**
 * This exports the global webstore variable for other files to import.
 */
declare var window: {__webstore__: Webstore}
export function webstore(): Webstore { return window.__webstore__; }

