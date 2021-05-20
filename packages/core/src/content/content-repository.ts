import { Page } from "./page";
import { PageRequest } from "./page-request";

export interface ContentRepository<TYPE, IDTYPE> {
    findAll(pageable?: PageRequest, query?: string): Promise<Page<TYPE>>; 
    findById(id: IDTYPE): Promise<TYPE>;
    save(entity: TYPE): Promise<TYPE>;
    saveAll(entities: TYPE[]): Promise<TYPE[]>;
    deleteById(id: IDTYPE): Promise<void>;
    deleteAllById(ids: IDTYPE[]): Promise<void>;
    delete(entity: TYPE): Promise<void>;
    deleteAll(entities: TYPE[]): Promise<void>;
}