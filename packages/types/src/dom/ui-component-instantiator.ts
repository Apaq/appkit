import { Action } from '..';
import { Bundle } from '../bundle/bundle';
import { UiElement } from './ui-element';

/**
 * Instantiator for a UiComponent.
 */
export interface UiComponentInstantiator {
    /**
     * Constructs a components.
     * @param baseUrl The base url from where the app bundle resides.
     * @param bundle The bundle object loaded from the app bundle's manifest.json.
     * @param id The id of the UiComponent in the app bundle to instantiate.
     * @param singleElement 
     */
    construct(baseUrl: string, bundle: Bundle, id: string, singleElement: boolean): Promise<UiElement>;

    bootstrap(uiElement: UiElement, action?: Action): Promise<void>;

    /**
     * Destructs a component by removing it completely from the DOM.
     * @param element The ui elements to detrcuts.
     */
    destruct(element: UiElement): void;
}