import { ContentProvider } from "./content-provider";
import { Page } from "./page";

/**
 * A client for retreiving content.
 * 
 * Multiple clients will be instantiated for the same content provider.
 */
export class ContentProviderClient<TYPE, IDTYPE> {

    constructor(private contentProvider: ContentProvider<TYPE, IDTYPE>) { }

    public async query(): Promise<Page<TYPE>> {
        return this.contentProvider.query();
    } 

    public async get(id: IDTYPE): Promise<TYPE> {
        return this.contentProvider.get(id);
    }

    public async save(entity: TYPE): Promise<TYPE> {
        return this.contentProvider.save(entity);
    }

    public async delete(id: IDTYPE): Promise<void> {
        return this.contentProvider.delete(id);
    }

    public close(): void {
        
    }
}