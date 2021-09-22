import { Logger } from "../logger";
import { CrudRepository } from "@apaq/leap-data-core";


/**
 * A registry for the available content providers.
 * 
 * A discriminator can be applied to the registration of the content provider in order register 
 * more than one provider for an authority. This can be to handle multiple versions of a content provider.
 * 
 * 
 */
export class ContentProviderRegistry {
    private _registry: {[key: string]: CrudRepository<any, any>;} = {};

    get<TYPE extends CrudRepository<any, any>>(authority: string, discriminator?: string): TYPE {
        const key = this.resolveKey(authority, discriminator);
        return this._registry[key] as TYPE;
    }
    
    public register(authority: string, contentProvider: CrudRepository<any, any>, discriminator?: string) {
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