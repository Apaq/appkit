import { Context, IData } from "@appkitjs.com/core";

/**
 * A Ui Element reference (App or Widgets).
 */
export interface UiElement {
    readonly context: Context;
    readonly nativeElement: HTMLElement

    whenInitialized(): Promise<Context>;
    callExtension(type: string, data: IData): Promise<void>;
}