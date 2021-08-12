import { ContentProvider } from "@appkitjs.com/types";
import { Logger } from "../logger";

/**
 * A registry for the available content providers.
 */
export class ContentProviderRegistry {
    private _registry: {[key: string]: ContentProvider<any, any>;} = {};

    get(authority: string, discriminator?: string) {
        const key = this.resolveKey(authority, discriminator);
        return this._registry[key];
    }
    
    public register(authority: string, contentProvider: ContentProvider<any, any>, discriminator?: string) {
        Logger.info(`Registering content provider: ${authority}`);
        const key = this.resolveKey(authority, discriminator);
        if(this._registry[key] == null) {
            this._registry[key] = contentProvider;
        }
    }

    private resolveKey(authority: string, discriminator: string) {
        let key = authority;
        if(discriminator) {
            key += '[' + discriminator + ']';
        }
        return key;
    }
}