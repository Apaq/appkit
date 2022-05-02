import { Bundle, Data, UiComponentInstantiator, Widget } from "@appkitjs.com/types";


export class WidgetImpl implements Widget {

    constructor(
        private instantiator: UiComponentInstantiator,
        public bundle: Bundle,
        public id: string,
        public name: string) {
            
    }
    public async instantiate(parentElement: HTMLElement, data?: Data): Promise<HTMLElement> {
        // TODO: We should have support for inserting into an element
        if (parentElement || data) return null;

        console.log(this.instantiator);        

        return null;
    }

}