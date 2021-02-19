import { ContentResolver } from "./content-resolver";
import { IData } from "./data";

export interface Context {
    getContentResolver(): ContentResolver;
    registerReceiver(receiver: (data: IData) => void): void 
}

export class ContextImpl implements Context {
    private _receivers: ((data: IData) => void)[] = [];

    constructor(private contentResolver) {}
    

    public getContentResolver(): ContentResolver{
        return this.contentResolver;
    }

    public registerReceiver(receiver: (data: IData) => void): void {
        this._receivers.push(receiver);
    }
}