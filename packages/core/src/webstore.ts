import { ContentProviderRegistry } from "./content-provider-registry";
import { ContentResolver } from "./content-resolver";
import { ContextManager } from "./context-manager";

declare var window: {__webstore__: Webstore};
if(typeof window.__webstore__ === 'undefined') {
    window.__webstore__ = {contexts: null, content: new ContentResolver(), contentProvider: null};
}

export interface Webstore {
    contexts: ContextManager;
    content: ContentResolver;
    contentProvider: ContentProviderRegistry;
}

