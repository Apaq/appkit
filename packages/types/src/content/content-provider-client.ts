import { CrudRepository } from "@apaq/leap-data-core";

/**
 * A client for retreiving content.
 * 
 * Multiple clients will be instantiated for the same content provider.
 */
export interface ContentProviderClient<TYPE, IDTYPE> extends CrudRepository<TYPE, IDTYPE> {

    
    close(): void;

    call<T>(method: string, ...args:any[]): Promise<T>;
}