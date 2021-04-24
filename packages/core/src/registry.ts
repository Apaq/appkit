import { ContentProviderRegistry } from "./content/content-provider-registry";
import { ContentResolver } from "./content/content-resolver";
import { ContentResolverImpl } from "./content/content-resolver-impl";
import { ContextManager } from "./context-manager";
import { registry } from "./global";

export interface Registry {
    contexts: ContextManager;
    content: ContentResolver;
    contentProvider: ContentProviderRegistry;
}

const instance = registry();
instance.contexts = new ContextManager();
instance.contentProvider = new ContentProviderRegistry();
instance.content = new ContentResolverImpl();
