export interface ContentProvider<TYPE, IDTYPE> {
    // TODO Should be some paging stuff
    query(): Promise<TYPE[]>; 
    get(id: IDTYPE): Promise<TYPE>;
    save(entity: TYPE): Promise<TYPE>;
    delete(id: IDTYPE): Promise<void>;
}