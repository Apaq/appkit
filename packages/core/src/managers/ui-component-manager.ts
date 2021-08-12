import { Bundle, ComponentManager, UiComponentInstantiator } from "@appkitjs.com/types";

export abstract class UiComponentManager implements ComponentManager {
    constructor(
        protected instantiator: UiComponentInstantiator, 
        public baseUrl: string,
        public bundle: Bundle, 
        public id: string, 
        public name: string, 
        public version: string) {}

}