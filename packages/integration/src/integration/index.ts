import { ContextManager } from "../core/context-manager";
import { BundleManager } from "./bundle-manager";

declare var window: { webstore: { bundles: BundleManager, contexts: ContextManager }}
if(!window.webstore) {
    window.webstore = {bundles: null, contexts: null}
}
window.webstore.bundles = new BundleManager();
window.webstore.contexts = new ContextManager();