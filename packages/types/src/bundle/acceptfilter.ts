
/**
 * Filter that defines what a component(App, Widget, Extension) accepts as data for a specific Action.
 */
export interface AcceptFilter {
    types?: string[];
    schemes?: string[];
}
