import { appkit } from "../global";
import { Context } from "../context";
import { ContentProviderClient } from "./content-provider-client";
import { ContentResolver } from "./content-resolver";

/**
 * The default ContextResolver implementation.
 */
 export class ContentResolverImpl implements ContentResolver {
    
    constructor(private context: Context) { }

    resolve<TYPE, ID>(uri: string): ContentProviderClient<TYPE, ID> {
        if(uri == null || !uri.startsWith('content://')) return null;
        
        const authority = uri.substring(10, uri.indexOf('/', 10));
    
        // TODO: Should detect whether user has granted access to this 
        // authority for this contextId
        
        // PSEUDO
        /*
           let approved;
           const approvedAuthorities = getApprovedAutorities(context.id);
           if(approvedAuthorities.contains(authority)) {
              approved = true; 
           } else {
               approved = confirm('Allow access?')
           }

           if(approved) {
               addApprovedAuthority(context.id, authority);
               const provider = appkit().contentProvider?.get(authority);
                return new ContentProviderClient<TYPE, ID>(provider);
           } else {
               return null;
           }
        */
    
        const provider = appkit().contentProvider?.get(authority);
        return new ContentProviderClient<TYPE, ID>(provider);
    }
}