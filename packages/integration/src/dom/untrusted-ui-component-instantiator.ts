import { Bundle } from "../bundle/bundle";
import { UiComponentInstantiator } from "./ui-component-instantiator";
import { UiElement } from "./ui-element";

/**
 * An untrusted UiComponentInstantiator.
 * 
 * This instantiator handles untrusted instantiation of UiComponents (Apps and Widgets, 
 * but not extensions). It does so by creaating an iframe and adding the script to the 
 * app bundle to the <head> of the iframe. It then handles controlled communication
 * between the main DOM and the iframe via postMessage.
 * 
 * The developer of an app has the same webstore API available as for trusted components,
 * but the will not have direct access to the main DOM.
 * 
 * If specified, styles for the app is also added to the header.
 */
export class UntrustedUiComponentInstantiator implements UiComponentInstantiator {
    instantiate(baseUrl: string, bundle: Bundle, id: string, singleElement: boolean): Promise<UiElement> {
        throw new Error("Method not implemented." + baseUrl +  bundle + id + singleElement);
    }

}