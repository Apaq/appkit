import { Action, ActionDefinition, Bundle, ComponentDefinition } from "@appkitjs.com/types";


/**
 * BundleMAnager implementation.
 */
export class BundleManagerImpl {
    private bundles: Bundle[] = [];

    public addBundle(bundle: Bundle) {
        this.bundles.push(bundle);
    }

    public resolveComponents(filter: {type?: 'App' | 'Widget', actionFilter?:Action}): { bundle: Bundle, component: ComponentDefinition}[] {
        const components: { bundle: Bundle, component: ComponentDefinition }[] = [];
        this.bundles.forEach(bundle => {
            bundle.components.forEach(component => {
                if ((!filter.type || component.type === filter.type) &&
                    (!filter.actionFilter || (component.actions && this.filterMatches(filter.actionFilter, ...component.actions)))) {
                    components.push({ bundle: bundle, component });
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