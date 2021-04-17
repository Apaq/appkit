export interface Page<T> {
    totalElements: number;
    totalPages: number;
    size: number;
    content: T[];
}