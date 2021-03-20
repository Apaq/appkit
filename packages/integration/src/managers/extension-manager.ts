import { Bundle } from "../bundle/bundle";
import { ComponentManager } from "./component-manager";
import { IData } from "@appkit/core";

export class ExtensionManager implements ComponentManager {
    bundle: Bundle;
    id: string;
    // The localized extension name
    name: string;

    // The extension version
    version: string;

    public async call(data: IData): Promise<any> {
        // TODO: Figure out how to handle extensions
        if (data) return null;
    }

}