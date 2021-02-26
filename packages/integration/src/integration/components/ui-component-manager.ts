import { Bundle } from "../bundle/bundle";
import { UiComponentInstantiator } from "../internal/ui-component-instantiator";
import { ComponentManager } from "./component-manager";

export interface UiComponentManager extends ComponentManager {}
export abstract class UiComponentManager implements ComponentManager {
    constructor(
        protected instantiator: UiComponentInstantiator, 
        public baseUrl: string,
        public bundle: Bundle, 
        public id: string, 
        public name: string, 
        public version: string) {}

}