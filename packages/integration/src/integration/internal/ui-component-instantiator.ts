import { Bundle } from './bundle';
import { UiElement } from './ui-element';

export interface UiComponentInstantiator {
    instantiate(baseUrl: string, bundle: Bundle, id: string): UiElement;
}