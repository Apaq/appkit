
import { AppkitRegistry } from '@appkitjs.com/types';
import { AppkitRegistryImpl } from './appkit-registry-impl';
import { TrustedUiComponentInstantiator } from './dom/trusted-ui-component-instantiator';
import { UntrustedUiComponentInstantiator } from './dom/untrusted-ui-component-instantiator';

export * from './bundle/index';
export * from './content/index';
export * from './context/index';
export * from './dom/index';
export * from './i18n/index';
export * from './managers/index'
export * from './appkit-registry-impl';
export * from './config';
export * from './data';
export * from './logger';
export * from './registry';
export * from './global';

declare var window: {Appkit: AppkitRegistry};

class Singleton {
    
    public static getAppkit(): AppkitRegistry {
        if(window.Appkit == null) {
            window.Appkit = new AppkitRegistryImpl({
                resolve: (trusted) => {
                    return trusted ? new TrustedUiComponentInstantiator() : new UntrustedUiComponentInstantiator();
                }
            });
        }
        return window.Appkit;
    }
}

export function Appkit(): AppkitRegistry {
    return Singleton.getAppkit();
}
