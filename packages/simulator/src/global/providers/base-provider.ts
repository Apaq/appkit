import { ContentProvider, Page } from "@appkitjs.com/core";

export interface HasId {
    id: string;
}

export abstract class BaseProvider<T extends HasId> implements ContentProvider<T, string> {
    
    constructor(private entities: T[]) {

    }

    query(): Promise<Page<T>> {
        let page: Page<T> = {
            totalElements: this.entities.length,
            totalPages: 1,
            size: this.entities.length,
            content: this.entities
        }
        return Promise.resolve(page);
    }
    get(id: string): Promise<T> {
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
    delete(id: string): Promise<void> {
        console.log('Deleting: ', id);
        throw new Error("Method not implemented.");
    }

}