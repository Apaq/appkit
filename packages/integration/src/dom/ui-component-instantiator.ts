import { Bundle } from '@appkitjs.com/core';
import { UiElement } from './ui-element';

/**
 * Instantiator for a UiComponent.
 */
export interface UiComponentInstantiator {
    /**
     * Instantiates a components.
     * @param baseUrl The base url from where the app bundle resides.
     * @param bundle The bundle object loaded from the app bundle's manifest.json.
     * @param id The id of the UiComponent in the app bundle to instantiate.
     * @param singleElement 
     */
    instantiate(baseUrl: string, bundle: Bundle, id: string, singleElement: boolean): Promise<UiElement>;
}