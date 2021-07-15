
/**
 * Interface for a Page.
 * 
 * A Page specified a segment of data retrieved from a ContentRepository.
 */
export interface Page<T> {
    totalElements: number;
    totalPages: number;
    size: number;
    content: T[];
}