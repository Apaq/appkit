import { BundleManager, ContentResolver } from "@appkitjs.com/types";
import { SettingsTable } from "../../types/dist/settings/settings-table";
import { BundleManagerImpl } from "./bundle/bundle-manager-impl";
import { ContentProviderRegistry } from "./content/content-provider-registry";
import { ContentResolverImpl } from "./content/content-resolver-impl";
import { ContextManager } from "./context/context-manager";
import { registry } from "./global";
import { DeviceSettings } from "./settings/device-settings";
import { SessionSettings } from "./settings/session-settings";

export interface Registry {
    contexts: ContextManager;
    content: ContentResolver;
    contentProvider: ContentProviderRegistry;
    bundles: BundleManager;
    settings: {
        device: SettingsTable,
        session: SettingsTable
    }
}

const instance = registry();
instance.contexts = new ContextManager();
instance.contentProvider = new ContentProviderRegistry();
instance.content = new ContentResolverImpl();
instance.bundles = new BundleManagerImpl();
instance.settings.device = new DeviceSettings();
instance.settings.session = new SessionSettings();
