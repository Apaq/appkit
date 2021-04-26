import { BundleManager } from "./bundle/bundle-manager";
import { BundleManagerImpl } from "./bundle/bundle-manager-impl";
import { ContentProviderRegistry } from "./content/content-provider-registry";
import { ContentResolver } from "./content/content-resolver";
import { ContentResolverImpl } from "./content/content-resolver-impl";
import { ContextManager } from "./context/context-manager";
import { registry } from "./global";

export interface Registry {
    contexts: ContextManager;
    content: ContentResolver;
    contentProvider: ContentProviderRegistry;
    bundles: BundleManager;
}

const instance = registry();
instance.contexts = new ContextManager();
instance.contentProvider = new ContentProviderRegistry();
instance.content = new ContentResolverImpl();
instance.bundles = new BundleManagerImpl();
