import { Action, ActionResult } from "@appkitjs.com/types";
import { Bundle, UiComponentInstantiator, App, UiElement } from "@appkitjs.com/types";

/**
 * A Manager for a specific app.
 * 
 * In order to open an app, an AppManager has to be retrieved from Appkit registry.
 * Having the AppManager allows to open the app.s
 */
export class AppImpl implements App {

    constructor(
        private instantiator: UiComponentInstantiator,
        private hostBuilder: (type: string) => HTMLElement,
        private baseUrl: string,
        public bundle: Bundle,
        public id: string,
        public name: string,
        public version: string) {
    }

    public async open(parentElement?: HTMLElement, action?: Action): Promise<UiElement> {
        if(!parentElement) {
            parentElement = this.hostBuilder('App');
        }

        action = this.wrapAction(action);
        const uiElement = await this.instantiator.instantiate(this.baseUrl, this.bundle, this.id, true);
        parentElement.appendChild(uiElement.nativeElement)
        this.instantiator.bootstrap(uiElement, action);

        return Promise.resolve(uiElement);
    }

    private wrapAction(action: Action): Action {
        if(action == null) {
            return action
        }
        
        const finish = (result: ActionResult) => {
            if(action.finish != null) {
                action.finish(result);
            }
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