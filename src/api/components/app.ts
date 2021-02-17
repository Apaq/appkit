import { Data, IData } from "./data";
import { IUiComponent } from "./ui-component";

export class App implements IUiComponent {
    bundleId: string;
    id: string;
    // The localized app name
    name: string;

    // The app version
    version: string;

    _element: HTMLElement;

    private resolveElement(): HTMLElement {
        if(this._element != null) {
            return this._element;
        }

        const tagName = `${this.bundleId}-${this.id}`;
        const el = document.createElement(tagName);
        this._element = el;
        return el;
    }

    public async open(data?: IData): Promise<HTMLElement> {
        // TODO: Open app in overlay.
        // There should be a way to select the type of overlay: 
        // * Dialog
        // * popover
        // * Full screen modal
        // * Existing element
        // * etc.

        if(data) {
            const dataObj = Data.of(data);
            if (data || dataObj) return null;
        }
        const el = this.resolveElement();
        document.body.appendChild(el);
        return Promise.resolve(el);
    }


}