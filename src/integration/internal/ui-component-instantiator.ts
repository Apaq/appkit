import { UiComponentManager } from '../components/ui-component-manager';
import { Bundle } from './bundle';
import { UiElement } from './ui-element';

export interface UiComponentInstantiator {
    instantiate(bundle: Bundle, id: string): UiElement;
}