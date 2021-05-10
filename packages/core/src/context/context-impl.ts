import { ContentResolver } from "../content/content-resolver";
import { Context } from "./context";
import { IData } from "../data";
import { Component } from "../bundle/component";
import { BundleManager } from "../bundle/bundle-manager";
import { ActionFilter } from "../bundle/actionfilter";

/**
 * Default implementatsion for the Context.s
 */
 export class ContextImpl implements Context {
    private _extensionHandler: ((type: string, data: IData) => void | IData);

    constructor(public readonly id: string, 
        private contentResolver: ContentResolver,
        private bundleManager: BundleManager) {}


    public getContentResolver(): ContentResolver {
        return this.contentResolver;
    }

    public set extensionHandler(receiver: (type: string, data: IData) => void) {
        this._extensionHandler = receiver;
    }

    public get extensionHandler(): (type: string, data: IData) => void {
        return this._extensionHandler;
    }

    public getComponents(actionFilter?: ActionFilter): Component[] {
        let components: Component[] = [];
        this.bundleManager.resolveComponents({actionFilter}).forEach(e => components.push(e.component));
        return components;
    }

    public startApp(actionType: string, data?: IData): void {
        console.log(actionType, data);
        throw new Error("Method not implemented.");
    }
    
}
