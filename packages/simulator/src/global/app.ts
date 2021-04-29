import { Appkit } from '@appkitjs.com/core';
import CoreBundle from './core-bundle';
import { ContactProvider } from './providers/contact-provider';

export default async () => {

  const appkit = Appkit();
  appkit.registerBundle(CoreBundle);
  appkit.registerProvider('contacts', new ContactProvider());
};
