export interface IData {
    uri: string;
    type?: string;
}

export class Data implements IData {
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
    
    static of(data: IData) {
        return new Data(data.uri, data.type);
    }
}