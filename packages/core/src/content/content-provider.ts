import { CrudRepository } from "@apaq/leap-data-core";

/**
 * Interface for a content provider.
 * 
 * Implement this interface for new providers and register it with the ContentProviderRegistry.
 */
export interface ContentProvider<TYPE, IDTYPE> extends CrudRepository<TYPE, IDTYPE> {
    call<T>(method: string, ...args: any[]): Promise<T>;
}