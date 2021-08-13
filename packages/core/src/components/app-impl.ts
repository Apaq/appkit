import { Bundle, UiComponentInstantiator, App, UiElement } from "@appkitjs.com/types";

/**
 * A Manager for a specific app.
 * 
 * In order to open an app, an AppManager has to be retrieved from Appkit registry.
 * Having the AppManager allows to open the app.s
 */
export class AppImpl implements App {

    constructor(
        private instantiator: UiComponentInstantiator,
        private baseUrl: string,
        public bundle: Bundle,
        public id: string,
        public name: string,
        public version: string) {
    }

    public async open(parentElement?: HTMLElement): Promise<UiElement> {
        if(!parentElement) {
            parentElement = document.body;
        }

        const uiElement = await this.instantiator.instantiate(this.baseUrl, this.bundle, this.id, true);
        parentElement.appendChild(uiElement.nativeElement)

        return Promise.resolve(uiElement);
    }

}