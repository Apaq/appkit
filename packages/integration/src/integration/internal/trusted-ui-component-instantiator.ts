import { Logger } from "@webstore/core";
import { Bundle } from "./bundle";
import { Config } from "./config";
import { Language } from "./language";
import { TrustedUiElement } from "./trusted-ui-element";
import { UiComponentInstantiator } from "./ui-component-instantiator";
import { UiElement } from "./ui-element";

export class TrustedUiComponentInstantiator implements UiComponentInstantiator {

    constructor(config: Config) {
        Logger.info('woog' + config);
    }

    instantiate(baseUrl: string, bundle: Bundle, id: string): UiElement {
        this.insertScript(baseUrl, bundle);
        const el = this.resolveElement(bundle, id);
        document.body.appendChild(el);
        return new TrustedUiElement(el);
    }

    private resolveElement(bundle: Bundle, id: string): HTMLElement {
        const tagName = `${bundle.id}-${id}`;
        const el = document.createElement(tagName);
        return el;
    }

    private insertScript(baseUrl: string, bundle: Bundle) {
        // TODO Check if script was already inserted
        const jsFile = bundle.jsFile != null ? bundle.jsFile : 'main.js';
        const cssFile = bundle.cssFile != null ? bundle.cssFile : null;
        const lang = Language.resolveLanguage();

        // Adds script
        let scriptUrl = !bundle.localize ? `${baseUrl}/${jsFile}` : `${baseUrl}/${lang}/${jsFile}`;
        const scriptEl = document.createElement('script');
        //scriptEl.setAttribute("type", "module");
        scriptEl.setAttribute("src", scriptUrl);
        document.head.appendChild(scriptEl);

        // Add styles
        if (cssFile != null) {
            const styleUrl = !bundle.localize ? `${baseUrl}/${cssFile}` : `${baseUrl}/${lang}/${cssFile}`;
            const styleEl = document.createElement('link');
            styleEl.setAttribute('rel', 'stylesheet');
            styleEl.setAttribute('type', 'text/css');
            styleEl.setAttribute('href', styleUrl);
            document.head.appendChild(styleEl);
        }

    }
}