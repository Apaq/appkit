import { ContentResolver } from "./content-resolver";
import { ContextManager } from "./context-manager";

export interface ManagerReference {
    contexts: ContextManager;
    content: ContentResolver;
}