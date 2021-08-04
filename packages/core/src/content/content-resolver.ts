import { ContentProviderClient } from "./content-provider-client";
import { ContentResolverArguments } from "./content-resolver-arguments";

/**
 * Interface for a ContentResolver.
 * 
 * This interface will be avaiable through the app context.
 */
export interface ContentResolver {
    resolve<TYPE, ID>(uri: string, args?: ContentResolverArguments): ContentProviderClient<TYPE, ID>;
}
