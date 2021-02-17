import { IData } from "./data";
import { IUiComponent } from "./ui-component";

export class Widget implements IUiComponent {
    bundleId: string;
    id: string;
    // The localized widget name
    name: string;

    // The widget version
    version: string;

    public async insert(parentElement: HTMLElement, data?: IData): Promise<HTMLElement> {
        // TODO: We should have support for inserting into an element
        if (parentElement || data) return null;
        return null;
    }

}