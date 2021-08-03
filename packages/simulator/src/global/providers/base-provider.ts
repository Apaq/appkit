import { ContentProvider, Logger } from "@appkitjs.com/core";
import { Page, PageRequest } from "@apaq/leap-data-core";

export interface HasId {
    id: string;
}

export abstract class BaseProvider<T extends HasId> implements ContentProvider<T, string> {
    
    constructor(private entities: T[]) {

    }

    call<T>(method: string, ...args: any[]): Promise<T> {
        throw new Error(`Method not implemented. [method: ${method}, args: ${args}`);
    }

    findAll(pageRequest: PageRequest, query: string): Promise<Page<T>> {
        if(!!query) {
            Logger.info('query defined, but is ignored');
        }
        const elements = this.entities.slice(pageRequest.size * pageRequest.page, pageRequest.size);
        let page: Page<T> = {
            totalElements: this.entities.length,
            totalPages: Math.ceil(this.entities.length / pageRequest.size),
            size: pageRequest.size,
            content: elements
        }
        return Promise.resolve(page);
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