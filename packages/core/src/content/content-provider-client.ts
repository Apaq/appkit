import { ContentProvider } from "./content-provider";
import { ContentRepository } from "./content-repository";
import { Page } from "./page";
import { PageRequest } from "./page-request";

/**
 * A client for retreiving content.
 * 
 * Multiple clients will be instantiated for the same content provider.
 */
export class ContentProviderClient<TYPE, IDTYPE> implements ContentRepository<TYPE, IDTYPE> {

    constructor(private contentProvider: ContentProvider<TYPE, IDTYPE>) { }

    public deleteAllById(ids: IDTYPE[]): Promise<void> {
        return this.contentProvider.deleteAllById(ids);
    }

    public delete(entity: TYPE): Promise<void> {
        return this.contentProvider.delete(entity);
    }

    public deleteAll(entities?: any) {
        return this.contentProvider.deleteAll(entities);
    }

    public async findAll(pageRequest?: PageRequest, query?: string): Promise<Page<TYPE>> {
        const req: PageRequest = {
            page: pageRequest?.page ?? 0,
            size: pageRequest?.size ?? 20,
            sort: pageRequest?.sort
        }
        return this.contentProvider.findAll(req, query);
    } 

    public async findById(id: IDTYPE): Promise<TYPE> {
        return this.contentProvider.findById(id);
    }

    public async save(entity: TYPE): Promise<TYPE> {
        return this.contentProvider.save(entity);
    }

    public async saveAll(entities: TYPE[]): Promise<TYPE[]> {
        return this.contentProvider.saveAll(entities);
    }

    public async deleteById(id: IDTYPE): Promise<void> {
        return this.contentProvider.deleteById(id);
    }

    public close(): void {
        
    }

    public call<T>(method: string, ...args:any[]): Promise<T> {
        return this.contentProvider.call(method, args);
    }
}