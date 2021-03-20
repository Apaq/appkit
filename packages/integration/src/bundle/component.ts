import { IAcceptFilter } from "./acceptfilter";
import { Action } from "./action";

/**
 * Defines a component in a bundle
 */
export interface Component {
    id:string;
    type: 'App' | 'Widget';
    accepts: IAcceptFilter[];
    name: string | {[key: string]: string;}
    actions: Action[];
}
