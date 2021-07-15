import { AppkitRegistry } from './appkit-registry';
import { TrustedUiComponentInstantiator } from './dom/trusted-ui-component-instantiator';
import { UntrustedUiComponentInstantiator } from './dom/untrusted-ui-component-instantiator';

export * from './bundle/index';
export * from './content/index';
export * from './context/index';
export * from './dom/index';
export * from './i18n/index';
export * from './managers/index'

export * from './appkit-registry';
export * from './config';
export * from './data';
export * from './logger';
export * from './registry';
export * from './global';


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
