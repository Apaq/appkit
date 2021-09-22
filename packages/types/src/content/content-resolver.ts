import { CrudRepository } from "@apaq/leap-data-core";

/**
 * Interface for a ContentResolver.
 * 
 * This interface will be avaiable through the app context.
 */
export interface ContentResolver {
    resolve<TYPE, ID>(uri: string, discriminator?: string): CrudRepository<TYPE, ID>;
}
