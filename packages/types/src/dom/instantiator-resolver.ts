import { UiComponentInstantiator } from "./ui-component-instantiator";

/**
 * Resolver of UIConponentInstantiators.
 * 
 * Can return either a trusted or an untrusted instantiator.
 */
export interface InstantiatorResolver {
    resolve(trusted: boolean): UiComponentInstantiator;
}