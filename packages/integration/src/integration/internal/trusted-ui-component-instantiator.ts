import { Logger, createContext } from "@webstore/core";
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

    async instantiate(baseUrl: string, bundle: Bundle, id: string): Promise<UiElement> {
        if(baseUrl != null) {
            await this.insertScript(baseUrl, bundle);    
        }
        const el = await this.insertComponent(bundle, id);

        return Promise.resolve(new TrustedUiElement(el));
    }

    private insertComponent(bundle: Bundle, id: string): Promise<HTMLElement> {
        const tagName = `${bundle.id}-${id}`;
        const el = document.createElement(tagName);
        return Promise.resolve(el);
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
            //scriptEl.setAttribute("type", "module");
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