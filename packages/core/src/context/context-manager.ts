import { Context } from "./context";
import { Logger } from "../logger";
import { registry } from "../global";
import { ContextImpl } from "./context-impl";

/**
 * Manager for app contexts.
 * 
 * Ensures that eacah app get's its unique context.
 */
export class ContextManager {
    
    // The list of registered contexts.
    private _contexts: {[key: string]: Context;} = {};
    
    public get(contextId: string) {
        return this._contexts[contextId];
    }

    // Create a new context.
    public create(contextId: string): Context {
        Logger.info(`Creating context: ${contextId}`);
        const context = new ContextImpl(contextId, registry().content, registry().bundles);
        this._contexts[contextId] = context;
        return context;
    }
}

// Default function for creating a new context
export function createContext(el: HTMLElement): Context {
    if(registry().contexts == null) {
        Logger.warn('Creating a context manager because no one else did.');
        registry().contexts = new ContextManager();
    }

    let contextId = null;
    if(customElements.get(el.tagName.toLowerCase()) != null) {
        contextId = el.tagName;
    } else if(customElements.get(el.parentElement?.tagName.toLowerCase()) != null) {
        // Some frameworks has the parent element registered instead.
        contextId = el.parentElement.tagName;
    } else {
        throw 'Element is not defined as a custom element.';
    }

    contextId += '-' + Date.now();
    el.setAttribute('context-id', contextId);
    return registry().contexts.create(contextId);
}