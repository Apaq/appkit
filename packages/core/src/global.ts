import { Context } from "../../types/dist";
import { Registry } from "./registry";

/**
 * This sets up the global appkit variable
 */
declare var window: { __appkit__: Registry, createAppContext: (el: HTMLElement) => Context };
if (typeof window.__appkit__ === 'undefined') {
    window.__appkit__ = {
        contexts: null,
        content: null,
        contentProviders: null,
        bundles: null,
        components: null,
        settings: {
            device: null,
            session: null
        }
    }
}

/**
 * This exports the global appkit variable for other files to import.
 */
export function registry(): Registry { return window.__appkit__; }