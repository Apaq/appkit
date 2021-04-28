import { Component, ContentResolver, Context, IData } from "@appkitjs.com/core";

export class ContextProxy implements Context {
    id: string;
    getContentResolver(): ContentResolver {
        throw new Error("Method not implemented.");
    }
    getComponents(actionType: string, data: IData): Component[] {
        console.log(actionType, data);
        throw new Error("Method not implemented.");
    }
    startApp(actionType: string, data?: IData): void {
        console.log(actionType, data);
        throw new Error("Method not implemented.");
    }
    // TODO: Use postmsg-rpc for communication.
    // https://www.npmjs.com/package/postmsg-rpc
    
    

    extensionHandler: (type: string, data: IData) => void;
    
}