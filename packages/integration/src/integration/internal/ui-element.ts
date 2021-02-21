import { Context } from "@webstore/core";

export interface UiElement {
    readonly context: Context;
    readonly nativeElement: HTMLElement

    whenInitialized(): Promise<Context>;
}