import { ContentProvider } from "./content-provider";

export class ContentProviderClient<TYPE, IDTYPE> {

    constructor(private contentProvider: ContentProvider<TYPE, IDTYPE>) { }

    // TODO Should be some paging stuff
    public async query(): Promise<TYPE[]> {
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