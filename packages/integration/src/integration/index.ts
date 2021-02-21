import { ContextManager } from "@webstore/core";
import { BundleManager } from "./bundle-manager";
import { IntegrationManagerReference } from "./internal/integration-manager-reference";
declare var __webstore__: IntegrationManagerReference
if(!__webstore__) {
    __webstore__ = {bundles: null, contexts: null, content: null}
}
__webstore__.bundles = new BundleManager();
__webstore__.contexts = new ContextManager();