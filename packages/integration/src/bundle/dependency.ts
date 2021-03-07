/**
 * Defines dependencies for an app bundle.
 * 
 * Some app bundle may need external scripts to be loaded on 
 * the page, fx. a Design system. A Dependency can define this
 * so it can be loaded in advance.
 */
export interface Dependency {
    id: string;
    script: string;
    style: string;
}