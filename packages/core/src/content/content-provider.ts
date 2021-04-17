import { Page } from "./page";

/**
 * Interface for a content provider.
 * 
 * Implement this interface for new providers and register it with the ContentPRoviderRegistry.
 */
export interface ContentProvider<TYPE, IDTYPE> {
    query(): Promise<Page<TYPE>>; 
    get(id: IDTYPE): Promise<TYPE>;
    save(entity: TYPE): Promise<TYPE>;
    delete(id: IDTYPE): Promise<void>;
}