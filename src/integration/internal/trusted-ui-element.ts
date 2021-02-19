import { UiElement } from "./ui-element";

export class TrustedUiElement implements UiElement {

    constructor(public nativeElement: HTMLElement) { }
}