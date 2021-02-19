import { ContentProviderClient } from "./content-provider-client";
import { ContentProviderRegistry } from "./content-provider-registry";

export class ContentResolver {
    private contentProviderRegistry = new ContentProviderRegistry()

    resolve<TYPE, ID>(uri: string | URL): ContentProviderClient<TYPE, ID> {
        if(uri) return null;

        let uriObj: URL;
        if(typeof uri === 'string') {
            uriObj = new URL(uri);
        } else {
            uriObj = uri as URL;
        }
        const authority = uriObj.host;
        const provider = this.contentProviderRegistry.get(authority);
        return new ContentProviderClient<TYPE, ID>(provider);
    }
}