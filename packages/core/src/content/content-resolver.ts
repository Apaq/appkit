import { ContentProviderClient } from "./content-provider-client";
import { webstore } from "./global";

/**
 * Interface for a ContentResolver.
 * 
 * This interface will be avaiable through the app context.
 */
export interface ContentResolver {
    resolve<TYPE, ID>(uri: string): ContentProviderClient<TYPE, ID>;
}

/**
 * The default ContextResolver implementation.
 */
export class ContentResolverImpl implements ContentResolver {
    

    resolve<TYPE, ID>(uri: string): ContentProviderClient<TYPE, ID> {
        if(uri == null || !uri.startsWith('content://')) return null;
        
        const authority = uri.substring(10, uri.indexOf('/', 10));
        const provider = webstore().contentProvider?.get(authority);
        return new ContentProviderClient<TYPE, ID>(provider);
    }
}