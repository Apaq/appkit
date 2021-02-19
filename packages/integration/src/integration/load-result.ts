import { AppManager } from "./components/app-manager";
import { WidgetManager } from "./components/widget-manager";
import { ExtensionManager } from "./components/extension-manager";

export class LoadResult {
    apps: AppManager[];
    widgets: WidgetManager[];
    extensions: ExtensionManager[];
}