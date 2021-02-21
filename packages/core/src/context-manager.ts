import { ContentResolver } from "./content-resolver";
import { Context, ContextImpl } from "./context";
import { Logger } from "./logger";
import { ManagerReference } from "./manager-reference";

declare var window: {__webstore__: ManagerReference};
if(typeof window.__webstore__ === 'undefined') {
    window.__webstore__ = {contexts: null, content: new ContentResolver()};
}

export class ContextManager {
    
    // The list of registered contexts.
    private _contexts: {[key: string]: Context;} = {};
    
    public get(contextId: string) {
        return this._contexts[contextId];
    }

    // Create a new context.
    public create(contextId: string): Context {
        Logger.warn(`Creating context: ${contextId}`);
        const context = new ContextImpl(window.__webstore__.content);
        this._contexts[contextId] = context;
        return context;
    }
}

// Default function for creating a new context
export function createContext(el: HTMLElement): Context {
    if(window.__webstore__.contexts == null) {
        Logger.warn('Creating a context manager because no one else did.');
        window.__webstore__.contexts = new ContextManager();
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
    return window.__webstore__.contexts.create(contextId);
}
