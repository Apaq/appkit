import { Page, PageRequest } from "@apaq/leap-data-core";
import { CrudRepository } from "@apaq/leap-data-core";

export interface HasId {
    id: string;
}

export abstract class BaseProvider<T extends HasId> implements CrudRepository<T, string> {
    
    constructor(private entities: T[]) {

    }

    findAll(pageRequest: PageRequest): Promise<Page<T>> {
        const page = pageRequest?.page ?? 0;
        const size = pageRequest?.size ?? 20;
        
        const elements = this.entities.slice(size * page, size);
        let result: Page<T> = {
            totalElements: this.entities.length,
            totalPages: Math.ceil(this.entities.length / size),
            size: size,
            content: elements
        }
        return Promise.resolve(result);
    }
    findById(id: string): Promise<T> {
        for(let e of this.entities) {
            if(e.id === id) {
                return Promise.resolve(e);
            }
        }
        return Promise.reject();
    }
    
    save(entity: T): Promise<T> {
        console.log('Saving: ', entity);
        throw new Error("Method not implemented.");
    }
    
    saveAll(entities: T[]): Promise<T[]> {
        console.log('Saving: ', entities);
        throw new Error("Method not implemented.");
    }

    deleteById(id: string): Promise<void> {
        console.log('Deleting: ', id);
        throw new Error("Method not implemented.");
    }

    deleteAllById(ids: string[]): Promise<void> {
        console.log('Deleting: ', ids);
        throw new Error("Method not implemented.");
    }

    delete(entity: T): Promise<void> {
        console.log('Deleting: ', entity);
        throw new Error("Method not implemented.");
    }

    deleteAll(entities: T[]): Promise<void> {
        console.log('Deleting: ', entities);
        throw new Error("Method not implemented.");
    }
}