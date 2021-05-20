import { ContentRepository } from "./content-repository";

/**
 * Interface for a content provider.
 * 
 * Implement this interface for new providers and register it with the ContentPRoviderRegistry.
 */
export interface ContentProvider<TYPE, IDTYPE> extends ContentRepository<TYPE, IDTYPE> {

}