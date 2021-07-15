import { IData } from "../data";
import { Context } from "../context/context";

/**
 * A Ui Element reference (App or Widgets).
 */
export interface UiElement {
    readonly context: Context;
    readonly nativeElement: HTMLElement

    callExtension(type: string, data: IData): Promise<void>;
}