import { Context, IData } from "@appkit/core";

/**
 * A Ui Element reference (App or Widgets).
 */
export interface UiElement {
    readonly context: Context;
    readonly nativeElement: HTMLElement

    whenInitialized(): Promise<Context>;
    transmit(data: IData): Promise<void>;
}