
/**
 * Filter that defines what a component(App, Widget, Extension) accepts as data for a specific Action.
 */
export interface IAcceptFilter {
    types?: string[];
    schemes?: string[];
}
