import { ContentResolver } from "./content-resolver";
import { Context, ContextImpl } from "./context";
import { Logger } from "./logger";
import { ManagerReference } from "./manager-reference";

declare var __webstore__: ManagerReference;
if(__webstore__ == null) {
    __webstore__ = {contexts: null, content: new ContentResolver()};
}

export class ContextManager {
    
    // The list of registered contexts.
    private _contexts: {[key: string]: Context;};
    
    getContext(key: string) {
        return this._contexts[key];
    }

    // Create a new context.
    createContext(key: string): Context {
        Logger.warn(`Creating context: ${key}`);
        const context = new ContextImpl(__webstore__.content);
        this._contexts[key] = context;
        return context;
    }
}

// The global context manager.
const _manager: ContextManager = new ContextManager();

// Default function for creating a new context
export default function (el: HTMLElement): Context {
    if(__webstore__.contexts == null) {
        Logger.warn('Creating a context manager because no one else did.');
        __webstore__.contexts = new ContextManager();
    }

    let key = null;
    if(customElements.get(el.tagName) != null) {
        key = el.tagName;
    } else if(customElements.get(el.parentElement.tagName) != null) {
        // Some frameworks has the parent element registered instead.
        key = el.parentElement.tagName;
    } else {
        throw 'Element is not defined as a custom element.';
    }
    return _manager.createContext(key);
}
