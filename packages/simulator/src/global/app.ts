import { Appkit, IdbContentProvider } from '@appkitjs.com/core';
import CoreBundle from './core-bundle';

export default async () => {

  const appkit = Appkit();
  const appDrawer = document.createElement('sl-drawer');
  appDrawer.setAttribute('placement', 'bottom');
  appDrawer.setAttribute('no-header', 'true');
  appDrawer.classList.add('app-container');

  document.body.appendChild(appDrawer);

  if (navigator.storage && navigator.storage.persist)
    navigator.storage.persist().then(granted => {
      if (granted) {
        var idb = new IdbContentProvider('trunte', 'id');
        idb.save({ id: 'test-123', name: 'trunte' });
        appkit.registerProvider('test', idb);
      }

    });


  appkit.registerBundle(CoreBundle);

  appkit.hostBuilder = (_ => {
    while (appDrawer.firstChild) {
      appDrawer.removeChild(appDrawer.firstChild);
    }
    appDrawer.setAttribute('open', 'true');
    appDrawer.style.cssText = '--size:90vh';
    return appDrawer;
  });
};

