import { Appkit, AppkitRegistry, IdbContentProvider } from '@appkitjs.com/core';
import CoreBundle from './core-bundle';
import { ContactProvider } from './providers/contact-provider';
import { OrderProvider } from './providers/orders-providers';

declare var window: { appkit: AppkitRegistry };

export default async () => {

  const appkit = Appkit();

  if (navigator.storage && navigator.storage.persist)
    navigator.storage.persist().then(granted => {
      if (granted) {
        var idb = new IdbContentProvider('trunte', 'id');
        idb.save({ id: 'test-123', name: 'trunte' });
        appkit.registerProvider('test', idb);
      }

    });


  appkit.registerBundle(CoreBundle);
  appkit.registerProvider('contacts', new ContactProvider());
  appkit.registerProvider('orders', new OrderProvider());

  appkit.getSessionSettings().setString('token', 'my-token-123123');


  window.appkit = appkit;
};
