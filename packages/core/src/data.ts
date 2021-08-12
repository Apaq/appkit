import { Data } from "../../types/dist";


/**
 * Default implementation for the IData interface.
 */
export class DataImpl implements Data {
    type: string | null;
    constructor(public uri: string, type?: string) {
        if(this.type != null) {
            this.type = type;
        } else {
            // Try to resolve type from:
            // 1: File suffix (.pdf, .jpg etc.)
            // 2: If scheme is http(s)://, then do an options request to get the type
            // 3: If scheme is content:// then resolve from content type registry
        }
    }
    
    static of(data: Data) {
        return new DataImpl(data.uri, data.type);
    }
}