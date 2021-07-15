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
        const context = new ContextImpl(contextId, registry());
        this._contexts[contextId] = context;
        return context;
    }
}
