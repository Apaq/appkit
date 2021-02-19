import { ContentProvider } from "./content-provider";
import { ContentResolver } from "./content-resolver";
import { Context, ContextImpl } from "./context";
import { Logger } from "./logger";

declare var window: { __webstore__: { contexts: ContextManager, content: ContentResolver }}
if(window.__webstore__ == null) {
    window.__webstore__ = {contexts: null, content: new ContentResolver()};
}

export class ContextManager {
    
    // The list of registered contexts.
    private _contexts: {[key: string]: Context;};
    
    // Create a new context.
    createContext(key: string): Context {
        Logger.warn(`Creating context: ${key}`);
        const context = new ContextImpl(window.__webstore__.content);
        this._contexts[key] = context;
        return context;
    }
}

// The global context manager.
const _manager: ContextManager = new ContextManager();

// Default function for creating a new context
export default function (el: HTMLElement): Context {
    if(window.__webstore__.contexts == null) {
        Logger.warn('Creating a context manager because no one else did.');
        window.__webstore__.contexts = new ContextManager();
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
