import { IData } from "../data";
import { Action } from "./action";
import { Bundle } from "./bundle";
import { Component } from "./component";

export class BundleManagerImpl {
    private bundles: { baseUrl: string, bundle: Bundle }[] = [];

    public addBundle(bundle: Bundle, baseUrl?: string) {
        this.bundles.push({ baseUrl: baseUrl, bundle });
    }

    public resolveComponents(filter: {type?: 'App' | 'Widget', action?:{type: string, data: IData}}): { baseUrl: string, bundle: Bundle, component: Component }[] {
        const components: { baseUrl: string, bundle: Bundle, component: Component }[] = [];
        this.bundles.forEach(entry => {
            entry.bundle.components.forEach(component => {
                if ((!filter.type || component.type === filter.type) &&
                    (!filter.action || (component.actions && this.filterMatches(filter.action, ...component.actions)))) {
                    components.push({ baseUrl: entry.baseUrl, bundle: entry.bundle, component });
                }
            })
        });
        return components;
    }

    private filterMatches(action: {type: string, data: IData}, ...actions: Action[]): boolean {
        if(!actions || !action) {
            return false;
        }

        for(let current of actions) {
            if(action.type === current.type) {
                for(let filter of current.accepts) {
                    if(filter.types && filter.types.indexOf(action.data.type) >= 0) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
}