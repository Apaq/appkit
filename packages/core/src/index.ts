
import { AppkitRegistry } from '@appkitjs.com/types';
import { AppkitRegistryImpl } from './appkit-registry-impl';

export * from './bundle';
export * from './dom';
export * from './i18n';
export * from './components'
export * from './appkit-registry-impl';
export * from './components/data';
export * from './logger';
export * from './registry';
export * from './global';
export * from './decorators';

declare var window: {Appkit: AppkitRegistry};

class Singleton {
    
    public static getAppkit(): AppkitRegistry {
        if(window.Appkit == null) {
            window.Appkit = new AppkitRegistryImpl();
        }
        return window.Appkit;
    }
}

export function Appkit(): AppkitRegistry {
    return Singleton.getAppkit();
}
