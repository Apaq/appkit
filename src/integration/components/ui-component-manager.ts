import { Bundle } from "../internal/bundle";
import { UiComponentInstantiator } from "../internal/ui-component-instantiator";
import { ComponentManager } from "./component-manager";

export interface UiComponentManager extends ComponentManager {}
export abstract class UiComponentManager implements ComponentManager {
    instantiator: UiComponentInstantiator;
    bundle: Bundle;
    id: string;
    // The localized app name
    name: string;

    // The app version
    version: string;

}