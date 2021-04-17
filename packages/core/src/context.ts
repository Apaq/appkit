import { ContentResolver } from "./content/content-resolver";
import { IData } from "./data";

/**
 * The context that each app can work within.
 * Provides ability to communicate with other apps.
 */
export interface Context {
    readonly id: string;
    getContentResolver(): ContentResolver;
    extensionHandler: (type: string, data: IData) => void
}

/**
 * Default implementatsion for the Context.s
 */
export class ContextImpl implements Context {
    private _extensionHandler: ((type: string, data: IData) => void | IData);

    constructor(public readonly id: string, private contentResolver: ContentResolver) {}

    public getContentResolver(): ContentResolver {
        return this.contentResolver;
    }

    public set extensionHandler(receiver: (type: string, data: IData) => void) {
        this._extensionHandler = receiver;
    }

    public get extensionHandler(): (type: string, data: IData) => void {
        return this._extensionHandler;
    }
}

