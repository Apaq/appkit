import { Registry } from "./registry";

/**
 * This sets up the global appkit variable
 */
declare var window: { __appkit__: Registry };
if (typeof window.__appkit__ === 'undefined') {
    window.__appkit__ = {
        bundles: null,
        components: null
    }
}

/**
 * This exports the global appkit variable for other files to import.
 */
export function registry(): Registry { return window.__appkit__; }