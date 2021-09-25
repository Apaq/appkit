import { Action, ActionDefinition, Bundle, ComponentDefinition } from "@appkitjs.com/types";


/**
 * BundleMAnager implementation.
 */
export class BundleManagerImpl {
    private bundles: { baseUrl: string, bundle: Bundle }[] = [];

    public addBundle(bundle: Bundle, baseUrl?: string) {
        this.bundles.push({ baseUrl: baseUrl, bundle });
    }

    public resolveComponents(filter: {type?: 'App' | 'Widget', actionFilter?:Action}): { baseUrl: string, bundle: Bundle, component: ComponentDefinition}[] {
        const components: { baseUrl: string, bundle: Bundle, component: ComponentDefinition }[] = [];
        this.bundles.forEach(entry => {
            entry.bundle.components.forEach(component => {
                if ((!filter.type || component.type === filter.type) &&
                    (!filter.actionFilter || (component.actions && this.filterMatches(filter.actionFilter, ...component.actions)))) {
                    components.push({ baseUrl: entry.baseUrl, bundle: entry.bundle, component });
                }
            })
        });
        return components;
    }

    private filterMatches(action: Action, ...actions: ActionDefinition[]): boolean {
        if(!actions || !action) {
            return false;
        }

        for(let current of actions) {
            if(action.type === current.type) {
                for(let filter of current.accepts) {
                    if(filter === action.data.type) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
}