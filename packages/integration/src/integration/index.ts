import { ContextManager } from "@webstore/core";
import { BundleManager } from "./bundle-manager";
debugger
declare var __webstore__: { bundles: BundleManager, contexts: ContextManager }
if(!__webstore__) {
    __webstore__ = {bundles: null, contexts: null}
}
__webstore__.bundles = new BundleManager();
__webstore__.contexts = new ContextManager();