import { ContentProviderClient } from "./content-provider-client";
import { webstore } from "./global";

export class ContentResolver {
    

    resolve<TYPE, ID>(uri: string): ContentProviderClient<TYPE, ID> {
        if(uri == null || !uri.startsWith('content://')) return null;
        
        const authority = uri.substring(10, uri.indexOf('/', 10));
        const provider = webstore().contentProvider?.get(authority);
        return new ContentProviderClient<TYPE, ID>(provider);
    }
}