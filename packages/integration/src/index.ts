import { Webstore as WebstoreImpl } from './webstore';
import { TrustedUiComponentInstantiator } from './dom/trusted-ui-component-instantiator';
import { UntrustedUiComponentInstantiator } from './dom/untrusted-ui-component-instantiator';

class Singleton {
    private static singleton: WebstoreImpl = null;

    public static getWebstore(): WebstoreImpl {
        if(this.singleton == null) {
            this.singleton = new WebstoreImpl({
                resolve: (trusted) => {
                    return trusted ? new TrustedUiComponentInstantiator() : new UntrustedUiComponentInstantiator();
                }
            });
        }
        return this.singleton;
    }
}

export function Webstore(): WebstoreImpl {
    return Singleton.getWebstore();
}
