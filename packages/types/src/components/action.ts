import { Data } from "../data";
import { ActionResult } from "./action-result";

/**
 * Filter for resolving components that has actions to match the filter.
 */
export interface Action {
    type: string;
    data: Data;
    finish?: (result: ActionResult) => void;
}