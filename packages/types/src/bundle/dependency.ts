/**
 * Defines dependencies for an app bundle.
 * 
 * Some app bundle may need external scripts to be loaded on 
 * the page, fx. a Design system. A Dependency can define this
 * so it can be loaded in advance.
 * 
 * Remark: The dependencies will only be loaded for untrusted bundles as trusted bundles is expected to have its dependencies fulfilled by site loading the bundle.
 */
export interface Dependency {
    id: string;
    script: string;
    style: string;
}