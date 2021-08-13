import { AcceptFilter } from "./acceptfilter";

/**
 * Defines an Action supported by a Component.
 * 
 * An action can be triggered for a Component. For example a Component can 
 * specify an "Open" action that lets other apps open an uri in this app. 
 * The component can specify what type of data it supports together with 
 * the action via the accept filter.
 */
export interface Action {
    type: string;
    name: string | {[key: string]: string;}
    accepts: AcceptFilter[];
}