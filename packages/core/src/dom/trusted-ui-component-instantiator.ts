import { Bundle } from "../bundle/bundle";
import { Context } from "../context/context";
import { Language } from "../i18n/language";
import { TrustedUiElement } from "./trusted-ui-element";
import { UiComponentInstantiator } from "./ui-component-instantiator";
import { UiElement } from "./ui-element";
import { registry } from "../global";
import { ContextAvailable } from "../context/context-available";

/**
 * A trusted UiComponentInstantiator.
 * 
 * This instantiator handles trusted instantiation of UiComponents (Apps and Widgets, 
 * but not extensions). It does so by adding the script to the app bundle to the 
 * <head> of the current page. The script for a bundle will only be added once even
 * if the same app is instantiated multiple times.
 * 
 * If specified, styles for the app is also added to the header.
 */
export class TrustedUiComponentInstantiator implements UiComponentInstantiator {

    constructor() {
    }

    async instantiate(baseUrl: string, bundle: Bundle, id: string, singleElement: boolean): Promise<UiElement> {
        if(baseUrl != null) {
            await this.insertScript(baseUrl, bundle);    
        }
        const tagName = `${bundle.id}-${id}`;
        const existingTags = document.getElementsByTagName(tagName);
        let el: HTMLElement;
        if(singleElement && existingTags.length > 0) {
            el = existingTags[0] as HTMLElement;
        } else {
            el = document.createElement(tagName);;
        }

        const context = await this.whenInitialized(el);
        if(this.implementsContextAvailable(el)) {
            // Hand context to component if possible.
            el.onContextAvailable(context);
        }

        return Promise.resolve(new TrustedUiElement(el));
    }

    private insertScript(baseUrl: string, bundle: Bundle): Promise<void> {
        return new Promise((resolve, reject) => {
            // Do not insert if already inserted
            const scriptId = `bundle-${bundle.id}`;
            if (document.getElementById(scriptId) != null) resolve(null);

            const jsFile = bundle.jsFile != null ? bundle.jsFile : 'main.js';
            const cssFile = bundle.cssFile != null ? bundle.cssFile : null;
            const lang = Language.resolveLanguage();
        
            // Adds script
            let scriptUrl = !bundle.localize ? `${baseUrl}/${jsFile}` : `${baseUrl}/${lang}/${jsFile}`;
            const scriptEl = document.createElement('script');
            document.head.appendChild(scriptEl);

            scriptEl.onerror = (error) => reject(error);
            scriptEl.onload = () => resolve(null);
            // TODO: How to know whether to load as module or not? Describe in bundle?
            scriptEl.setAttribute("type", bundle.type ?? 'application/javascript');
            scriptEl.setAttribute("src", scriptUrl);
            scriptEl.setAttribute('id', scriptId);

            // Add styles
            if (cssFile != null) {
                const styleUrl = !bundle.localize ? `${baseUrl}/${cssFile}` : `${baseUrl}/${lang}/${cssFile}`;
                const styleEl = document.createElement('link');
                styleEl.setAttribute('rel', 'stylesheet');
                styleEl.setAttribute('type', 'text/css');
                styleEl.setAttribute('href', styleUrl);
                document.head.appendChild(styleEl);
            }
        });


    }

    async whenInitialized(el: HTMLElement): Promise<Context> {
        await customElements.whenDefined(el.tagName.toLowerCase());

        const existingContextId = el.getAttribute('context-id');
        if(existingContextId == null) {
            let contextId = null;
            if(customElements.get(el.tagName.toLowerCase()) != null) {
                contextId = el.tagName;
            } else if(customElements.get(el.parentElement?.tagName.toLowerCase()) != null) {
                // Some frameworks has the parent element registered instead.
                contextId = el.parentElement.tagName;
            } else {
                throw 'Element is not defined as a custom element.';
            }
            contextId += '-' + Date.now();
            el.setAttribute('context-id', contextId);
            return Promise.resolve(registry().contexts.create(contextId));
        } else {
            return Promise.resolve(registry().contexts.get(existingContextId));
        }
    }
    
    private implementsContextAvailable(element: any): element is ContextAvailable {
        return typeof(element.onContextAvailable) === 'function'; 
    }
}