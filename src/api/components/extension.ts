import { IComponent } from "./component";
import { IData } from "./data";

export class Extension implements IComponent {
    bundleId:string;
    id: string;
    // The localized extension name
    name: string;

    // The extension version
    version: string;



    public async call(data: IData) {
        // TODO: Figure out how to handle extensions
        if (data) return null;
    }

}