import { Bundle } from "@appkitjs.com/types";
import { BundleManagerImpl } from "../bundle";
import { registry } from "../global";
import { Registry } from "../registry";

export function AppBundle(bundle: Bundle) {
  return function (_: any) {
    const appkit: Registry = registry();
    (appkit.bundles as BundleManagerImpl).addBundle(bundle);
  };
}

