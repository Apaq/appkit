import { Action, ActionResult } from "@appkitjs.com/types";
import { Bundle, UiComponentInstantiator, App, UiElement } from "@appkitjs.com/types";
import { HostBuilder } from "../../../types/dist/dom/host-builder";

/**
 * A Manager for a specific app.
 * 
 * In order to open an app, an AppManager has to be retrieved from Appkit registry.
 * Having the AppManager allows to open the app.s
 */
export class AppImpl implements App {

    private uiElement: UiElement;
    private host: HTMLElement;

    constructor(
        private instantiator: UiComponentInstantiator,
        private hostBuilder: HostBuilder,
        private baseUrl: string,
        public bundle: Bundle,
        public id: string,
        public name: string,
        public version: string) {
    }

    public async open(host?: HTMLElement, action?: Action): Promise<UiElement> {
        if(this.uiElement != null) return;

        this.host = host;
        if(!this.host) {
            this.host = await this.hostBuilder.construct('App');
        }

        action = this.wrapAction(action);
        this.uiElement = await this.instantiator.construct(this.baseUrl, this.bundle, this.id, true);
        this.host.appendChild(this.uiElement.nativeElement)
        this.instantiator.bootstrap(this.uiElement, action);

        return Promise.resolve(this.uiElement);
    }

    public async close() {
        this.instantiator.destruct(this.uiElement);
        this.hostBuilder.destruct(this.host);
        this.uiElement = null;
    }

    private wrapAction(action: Action): Action {
        if(action == null) {
            return action
        }
        
        const finish = (result: ActionResult) => {
            if(action.finish != null) {
                action.finish(result);
            }
            this.close();
        }
        return {
            type: action.type,
            data: {
                uri: action.data?.uri,
                type: action.data?.type
            },
            finish
        }
    }

}