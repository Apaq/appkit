import { Bundle } from "./bundle";
import { Data, App, Widget} from "./components";
import { HostBuilder } from "./dom";

export interface AppkitRegistry {

    registerBundle(bundle: Bundle): void;
    
    hostBuilder: HostBuilder;

    resolveAppById(prefix: string, appId: string): App;
    resolveApps(): App[];

    resolveAppsByData(data: Data, actionType?: string): App[] ;

    resolveWidgetById(prefix: string, widgetId: string): Widget;
    resolveWidgets(): Widget[];

    resolveWidgetsByData(data: Data, actionType?: string): Widget[];

}
