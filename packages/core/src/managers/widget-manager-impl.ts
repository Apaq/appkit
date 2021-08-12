import { Bundle, Data, UiComponentInstantiator, WidgetManager } from "@appkitjs.com/types";


export class WidgetManagerImpl implements WidgetManager {

    constructor(
        private instantiator: UiComponentInstantiator,
        private baseUrl: string,
        public bundle: Bundle,
        public id: string,
        public name: string,
        public version: string) {
            
    }
    public async instantiate(parentElement: HTMLElement, data?: Data): Promise<HTMLElement> {
        // TODO: We should have support for inserting into an element
        if (parentElement || data) return null;

        console.log(this.instantiator, this.baseUrl);        

        return null;
    }

}