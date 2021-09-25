import { Action } from "../components/action";
import { Bundle } from "./bundle";
import { ComponentDefinition } from "./component.definition";

/**
 * Interface for a BundleManager.
 * 
 * A BundleManager can resolve components that have actions that matches the type or/and the given ActionFilter.
 */
export interface BundleManager {
    resolveComponents(filter: {type?: 'App' | 'Widget', actionFilter?: Action}): { baseUrl: string, bundle: Bundle, component: ComponentDefinition }[];
}