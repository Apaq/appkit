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
declare var window: {__webstore__: Webstore};
if(typeof window.__webstore__ === 'undefined') {
    window.__webstore__ = {contexts: null, content: null, contentProvider: null}
}
window.__webstore__.contexts = new ContextManager();
window.__webstore__.contentProvider = new ContentProviderRegistry();


/**
 * This exports the global webstore variable for other files to import.
 */
export function webstore(): Webstore { return window.__webstore__; }

