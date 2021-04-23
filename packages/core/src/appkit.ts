import { ContentProviderRegistry } from "./content/content-provider-registry";
import { ContentResolver } from "./content/content-resolver";
import { ContentResolverImpl } from "./content/content-resolver-impl";
import { ContextManager } from "./context-manager";
import { appkit } from "./global";

export interface Appkit {
    contexts: ContextManager;
    content: ContentResolver;
    contentProvider: ContentProviderRegistry;
}

const instance = appkit();
instance.contexts = new ContextManager();
instance.contentProvider = new ContentProviderRegistry();
instance.content = new ContentResolverImpl();
