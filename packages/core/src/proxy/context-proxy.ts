import { ContentResolver } from "../content/content-resolver";
import { Context } from "../context";
import { IData } from "../data";

export class ContextProxy implements Context {
    // TODO: Use postmsg-rpc for communication.
    // https://www.npmjs.com/package/postmsg-rpc
    
    getContentResolver(): ContentResolver {
        throw new Error("Method not implemented.");
    }


    extensionHandler: (type: string, data: IData) => void;
    
}