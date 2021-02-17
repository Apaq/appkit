import { App } from "./components/app";
import { Widget } from "./components/widget";
import { Extension } from "./components/extension";

export class LoadResult {
    apps: App[];
    widgets: Widget[];
    extensions: Extension[];
}