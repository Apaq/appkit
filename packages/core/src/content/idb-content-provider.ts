import { ContentProvider } from "./content-provider";
import { Page } from "./page";
import { PageRequest } from "./page-request";

export class IdbContentProvider<TYPE> implements ContentProvider<TYPE, string> {

    db: IDBDatabase;

    constructor(private dbName: string, private idPath: string) {
        var request = indexedDB.open('appkit', 1);
        
        request.onsuccess = () => {
            this.db = request.result;
        }
            
        request.onupgradeneeded = (_) => {
            var db = request.result;
            
            db.createObjectStore(this.dbName, { keyPath: this.idPath });
          
            //objectStore.createIndex("name", "name", { unique: false });

          }; 
    }

    call<T>(method: string, ...args: any[]): Promise<T> {
        throw new Error(`Method not implemented. [method: ${method}, args: ${args}]`);
    }

    async findAll(pageable?: PageRequest, query?: string): Promise<Page<TYPE>> {
        await this.awaitReady();
        if(!pageable) {
            pageable = {
                page: 0,
                size: 20,
                sort: null
            }
        }

        if(query != null) {
            console.info('query not supported: ', query);
        }

        const tr = this.db.transaction(this.dbName);
        const store = tr.objectStore(this.dbName);
        const request = store.getAll();
        
        return new Promise((resolve, reject) => {
            request.onerror = (err) => reject(err);
            request.onsuccess = (_) => {
                const entities = request.result;
                const page: Page<TYPE> = {
                    content: entities.slice(pageable.size * pageable.page, pageable.size * (pageable.page + 1)), 
                    size: pageable.size,
                    totalElements: entities.length,
                    totalPages: Math.ceil(entities.length / pageable.size)
                }
                resolve(page);
            }
        });
    }

    async findById(id: string): Promise<TYPE> {
        await this.awaitReady();
        const tr = this.db.transaction(this.dbName);
        const store = tr.objectStore(this.dbName);
        const request = store.get(id);
        
        return new Promise((resolve, reject) => {
            request.onerror = (err) => reject(err);
            request.onsuccess = (_) => {
                const entity = request.result;
                resolve(entity);
            }
        });
    }

    async save(entity: TYPE): Promise<TYPE> {
        await this.awaitReady();
        const tr = this.db.transaction(this.dbName, "readwrite");
        const store = tr.objectStore(this.dbName);
        const id = this.getId(entity);
        const request = id == null ? store.add(entity) : store.put(entity);
        
        return new Promise((resolve, reject) => {
            request.onerror = (err) => reject(err);
            request.onsuccess = (_) => {
                const id = request.result as string;
                resolve(this.findById(id));
            }
        });
    }

    saveAll(entities: TYPE[]): Promise<TYPE[]> {
        throw new Error(`Method not implemented. ${entities}`);
    }

    async deleteById(id: string): Promise<void> {
        await this.awaitReady();
        const tr = this.db.transaction(this.dbName, "readwrite");
        const store = tr.objectStore(this.dbName);
        const request = store.delete(id);
        
        return new Promise((resolve, reject) => {
            request.onerror = (err) => reject(err);
            request.onsuccess = (_) => {
                resolve();
            }
        });
    }

    async deleteAllById(ids: string[]): Promise<void> {
        await this.awaitReady();
        const promises: Promise<void>[] = [];
        ids.forEach(id => {
            promises.push(this.deleteById(id));
        })
        return Promise.all(promises) as any as Promise<void>;
    }

    async delete(entity: TYPE): Promise<void> {
        await this.awaitReady();
        const id = this.getId(entity);
        if(id != null) {
            return this.deleteById(id);
        } else {
            return Promise.reject('No id specified on entity.');
        }
    }

    async deleteAll(entities: TYPE[]): Promise<void> {
        await this.awaitReady();
        const promises: Promise<void>[] = [];
        entities.forEach(e => {
            promises.push(this.delete(e));
        })
        return Promise.all(promises) as any as Promise<void>;
    }


    private getId(entity: TYPE) {
        const tmp = entity as any;
        const id = tmp[this.idPath];
        return id;
    }

    private awaitReady(): Promise<void> {
        return new Promise((resolve, reject) => {
            const start = new Date().getTime();
            const interval = setInterval(() => {
                if(this.db != null) {
                    resolve();
                    clearInterval(interval);
                }

                if(new Date().getTime() - start > 10000) {
                    reject("Timeout");
                    clearInterval(interval);
                }
            }, 10);
        });

    }
}