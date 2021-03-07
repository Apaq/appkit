import { IAcceptFilter } from "./acceptfilter";

/**
 * Defines a component in a bundle
 */
export interface Component {
    id:string;
    type: 'App' | 'Widget';
    accepts: IAcceptFilter[];
    name: string | {[key: string]: string;}
}
