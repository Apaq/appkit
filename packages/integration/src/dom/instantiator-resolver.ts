import { UiComponentInstantiator } from "./ui-component-instantiator";

export interface InstantiatorResolver {
    resolve(trusted: boolean): UiComponentInstantiator;
}