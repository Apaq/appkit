import { ContentProviderClient } from "./content-provider-client";

/**
 * Interface for a ContentResolver.
 * 
 * This interface will be avaiable through the app context.
 */
export interface ContentResolver {
    resolve<TYPE, ID>(uri: string, discriminator?: string): ContentProviderClient<TYPE, ID>;
}
