import { ContentResolver } from "./content/content-resolver";
import { IData } from "./data";

/**
 * The context that each app can work within.
 * 
 * Provides ability to communicate with other apps.
 */
export interface Context {
    getContentResolver(): ContentResolver;
    receiver: (data: IData) => void
}

/**
 * Default implementatsion for the Context.s
 */
export class ContextImpl implements Context {
    private _receiver: ((data: IData) => void);

    constructor(private contentResolver: ContentResolver) {}
    

    public getContentResolver(): ContentResolver {
        return this.contentResolver;
    }

    public set receiver(receiver: (data: IData) => void) {
        this._receiver = receiver;
    }

    public get receiver(): (data: IData) => void {
        return this._receiver;
    }
}

