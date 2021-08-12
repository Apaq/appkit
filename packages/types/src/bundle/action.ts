import { AcceptFilter } from "./acceptfilter";

/**
 * Defines an Action supported by a Component.
 */
export interface Action {
    type: string;
    name: string | {[key: string]: string;}
    accepts: AcceptFilter[];
}