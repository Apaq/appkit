import { Bundle } from "../bundle/bundle";
import { Language } from "../i18n/language";
import { TrustedUiElement } from "./trusted-ui-element";
import { UiComponentInstantiator } from "./ui-component-instantiator";
import { UiElement } from "./ui-element";

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
            // TODO: How to know whether to load as module or not?
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
}