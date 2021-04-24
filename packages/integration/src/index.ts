import { AppkitRegistry } from './appkit-registry';
import { TrustedUiComponentInstantiator } from './dom/trusted-ui-component-instantiator';
import { UntrustedUiComponentInstantiator } from './dom/untrusted-ui-component-instantiator';

export * from './bundle/acceptfilter';
export * from './bundle/action';
export * from './bundle/bundle';
export * from './bundle/component';
export * from './bundle/dependency';

export * from './dom/instantiator-resolver';
export * from './dom/ui-element';
export * from './dom/ui-element';

export * from './appkit-registry';
export * from './config';

class Singleton {
    private static singleton: AppkitRegistry = null;

    public static getAppkit(): AppkitRegistry {
        if(this.singleton == null) {
            this.singleton = new AppkitRegistry({
                resolve: (trusted) => {
                    return trusted ? new TrustedUiComponentInstantiator() : new UntrustedUiComponentInstantiator();
                }
            });
        }
        return this.singleton;
    }
}

export function Appkit(): AppkitRegistry {
    return Singleton.getAppkit();
}

declare var window: {Appkit: () => AppkitRegistry};
window.Appkit = () => Singleton.getAppkit();
