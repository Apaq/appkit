import { ContentResolver } from "./content-resolver";
import { IData } from "./data";

export interface Context {
    getContentResolver(): ContentResolver;
    receiver: (data: IData) => void
}

export class ContextImpl implements Context {
    private _receiver: ((data: IData) => void);

    constructor(private contentResolver: ContentResolver) {}
    

    public getContentResolver(): ContentResolver{
        return this.contentResolver;
    }

    public set receiver(receiver: (data: IData) => void) {
        this._receiver = receiver;
    }

    public get receiver(): (data: IData) => void {
        return this._receiver;
    }
}