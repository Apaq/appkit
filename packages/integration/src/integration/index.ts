import { ContentProviderRegistry, ContextManager } from "@webstore/core";
import { BundleManager } from "./bundle-manager";
import { WebstoreIntegration } from "./internal/webstore-integation";

declare var __webstore__: WebstoreIntegration
if(!__webstore__) {
    __webstore__ = {bundles: null, contexts: null, content: null, contentProvider: null}
}
__webstore__.bundles = new BundleManager();
__webstore__.contexts = new ContextManager();
__webstore__.contentProvider = new ContentProviderRegistry();