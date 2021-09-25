/**
 * Defines an Action supported by a Component.
 * 
 * An action can be triggered for a Component. For example a Component can 
 * specify an "Open" action that lets other apps open an uri in this app. 
 * The component can specify what type of data it supports together with 
 * the action via the accept filter.
 */
export interface ActionDefinition {
    /**
     * The type of action.
     */
    type: 'Open' | 'Share';

    /**
     * The display name of the action given either as a string in English or as an object of supported languages. (English will be fallback).
     */
    name: string | {[key: string]: string;}

    /**
     * The type of data that it accepts specified as a mimetype, fx. image/jpeg or video/mp4.
     */
    accepts: string[];
}