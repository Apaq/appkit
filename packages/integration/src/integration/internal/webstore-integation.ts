import { Webstore } from "@webstore/core";
import { BundleManager } from "../bundle/bundle-manager";

export interface WebstoreIntegration extends Webstore {
    bundles: BundleManager;
}