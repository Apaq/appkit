import { Component } from "./component";
import { Dependency } from "./dependency";

/**
 * Defines an app bundle. 
 * 
 * The contents of manifest.json of an app bundle is read as a Bundle.
 */
export interface Bundle {
    id: string;
    name: string | {[key: string]: string;};
    version: string;
    description: string;
    keywords: string[];
    homepage: string;
    bugs: {url: string, email?: string},
    localize: boolean | string[],
    type: 'application/javascript' | 'module',
    jsFile: string,
    cssFile: string,
    components: Component[];
    dependencies: Dependency[];
}

