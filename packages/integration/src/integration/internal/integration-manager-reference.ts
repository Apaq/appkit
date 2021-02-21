import { ContentResolver } from "@webstore/core";
import { ContextManager } from "@webstore/core";
import { BundleManager } from "../bundle-manager";

export interface IntegrationManagerReference {
    contexts: ContextManager;
    content: ContentResolver;
    bundles: BundleManager;
}