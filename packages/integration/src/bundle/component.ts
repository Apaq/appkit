import { Action } from "./action";

/**
 * Defines a component in a bundle
 */
export interface Component {
    id:string;
    type: 'App' | 'Widget';
    name: string | {[key: string]: string;}
    actions: Action[];
}
