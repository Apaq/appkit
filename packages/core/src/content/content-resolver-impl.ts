import { registry } from "../global";
import { ContentProviderClient } from "./content-provider-client";
import { ContentResolver } from "./content-resolver";

interface Uri {
    href: string,
    protocol: string,
    host: string,
    hostname: string,
    port: string,
    pathname: string,
    search: string,
    hash: string
}

/**
 * The default ContextResolver implementation.
 */
 export class ContentResolverImpl implements ContentResolver {
    
    constructor() { }

    resolve<TYPE, ID>(uri: string): ContentProviderClient<TYPE, ID> {
        if(uri == null || !uri.startsWith('content://')) return null;
        
        const uriObj = this.resolveUri(uri);
        const authority = uriObj.hostname; // uri.substring(10, uri.indexOf('/', 10));
    
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
    
        const provider = registry().contentProvider?.get(authority);
        return new ContentProviderClient<TYPE, ID>(provider);
    }

    private resolveUri(uri: string): Uri {
        var match = uri.match(/^([a-zA-Z]*\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
        return match && {
            href: uri,
            protocol: match[1].toLocaleLowerCase(),
            host: match[2].toLocaleLowerCase(),
            hostname: match[3].toLocaleLowerCase(),
            port: match[4],
            pathname: match[5],
            search: match[6],
            hash: match[7]
        }
    }
}