import { ComponentDefinition } from "./component.definition";

/**
 * Defines an app bundle. 
 * 
 * The contents of manifest.json of an app bundle is read as a Bundle.
 */
export interface Bundle {
    prefix: string;
    components: ComponentDefinition[];
}

