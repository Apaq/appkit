import { ContentProviderRegistry } from "./content-provider-registry";
import { ContentResolver, ContentResolverImpl } from "./content-resolver";
import { Context } from "./context";
import { ContextManager, createContext } from "./context-manager";

export interface Webstore {
    contexts: ContextManager;
    content: ContentResolver;
    contentProvider: ContentProviderRegistry;
}

/**
 * This sets up the global webstore variable
 */
declare var window: {__webstore__: Webstore, createAppContext: (el: HTMLElement) => Context};
if(typeof window.__webstore__ === 'undefined') {
    window.__webstore__ = {
        contexts: null, 
        content: null, 
        contentProvider: null
    }
}
window.__webstore__.contexts = new ContextManager();
window.__webstore__.contentProvider = new ContentProviderRegistry();
window.__webstore__.content = new ContentResolverImpl();

window.createAppContext = createContext;


/**
 * This exports the global webstore variable for other files to import.
 */
export function webstore(): Webstore { return window.__webstore__; }

