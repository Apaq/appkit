import { Registry } from "./registry";
import { Context } from "./context/context";

/**
 * This sets up the global appkit variable
 */
declare var window: { __appkit__: Registry, createAppContext: (el: HTMLElement) => Context };
if (typeof window.__appkit__ === 'undefined') {
    window.__appkit__ = {
        contexts: null,
        content: null,
        contentProvider: null,
        bundles: null
    }
}

/**
 * This exports the global appkit variable for other files to import.
 */
export function registry(): Registry { return window.__appkit__; }