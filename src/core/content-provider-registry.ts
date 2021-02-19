import { ContentProvider } from "./content-provider";
import { Logger } from "./logger";

export class ContentProviderRegistry {
    private _registry: {[key: string]: ContentProvider<any, any>;};

    get(authority: string) {
        return this._registry[authority];
    }
    
    public register(authority: string, contentProvider: ContentProvider<any, any>) {
        Logger.info(`Registering content provider: ${authority}`);
        if(this._registry[authority] == null) {
            this._registry[authority] = contentProvider;
        }
    }
}