import { Context } from "./context";

export interface ContextAvailable {
    onContextAvailable(context: Context): void;
}