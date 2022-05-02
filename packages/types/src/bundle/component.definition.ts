import { ActionDefinition } from "./action.definition";

/**
 * Defines a component in a bundle.
 */
export interface ComponentDefinition {
    id:string;
    type: 'App' | 'Widget';
    name: string | {[key: string]: string;}
    actions?: ActionDefinition[];
}
