
import { AppkitRegistry } from '@appkitjs.com/types';
import { AppkitRegistryImpl } from './appkit-registry-impl';

export * from './bundle/index';
export * from './content/index';
export * from './context/index';
export * from './dom/index';
export * from './i18n/index';
export * from './components/index'
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
            window.Appkit = new AppkitRegistryImpl();
        }
        return window.Appkit;
    }
}

export function Appkit(): AppkitRegistry {
    return Singleton.getAppkit();
}
