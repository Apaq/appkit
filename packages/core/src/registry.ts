import { BundleManager } from "@appkitjs.com/types";
import { BundleManagerImpl } from "./bundle/bundle-manager-impl";
import { ComponentManager } from "./components/component-manager";
import { registry } from "./global";

export interface Registry {
    bundles: BundleManager;
    components: ComponentManager;
}

const instance = registry();
instance.bundles = new BundleManagerImpl();
instance.components = new ComponentManager(instance.bundles);
