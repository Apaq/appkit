import { Bundle } from '../bundle/bundle';
import { UiElement } from './ui-element';

export interface UiComponentInstantiator {
    instantiate(baseUrl: string, bundle: Bundle, id: string, singleElement: boolean): Promise<UiElement>;
}