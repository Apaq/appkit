import { Appkit as AppkitDef } from './appkit';
import { TrustedUiComponentInstantiator } from './dom/trusted-ui-component-instantiator';
import { UntrustedUiComponentInstantiator } from './dom/untrusted-ui-component-instantiator';

class Singleton {
    private static singleton: AppkitDef = null;

    public static getAppkit(): AppkitDef {
        if(this.singleton == null) {
            this.singleton = new AppkitDef({
                resolve: (trusted) => {
                    return trusted ? new TrustedUiComponentInstantiator() : new UntrustedUiComponentInstantiator();
                }
            });
        }
        return this.singleton;
    }
}

declare var window: {Appkit: () => AppkitDef};
window.Appkit = () => Singleton.getAppkit();
