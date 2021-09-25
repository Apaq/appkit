import { Context } from "../context/context";
import { Action } from "..";

/**
 * A Ui Element reference (App or Widgets).
 */
export interface UiElement {
    readonly context: Context;
    readonly nativeElement: HTMLElement

    callExtension(action: Action): Promise<void>;
}