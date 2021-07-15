/**
 * Interface for PageRequest.
 * 
 * A PageRequest is used to specify the segment of data to retreive from a ContentRepository.
 */
export interface PageRequest {
    page: number;
    size: number;
    sort: string;
}