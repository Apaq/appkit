import { Data } from "../data";

/**
 * Filter for resolving components that has actions to match the filter.
 */
export interface ActionFilter {
    type: string;
    data: Data;
}