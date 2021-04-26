import { Bundle } from '@appkitjs.com/core';
import { Appkit } from '@appkitjs.com/integration';

export default async () => {

  const appkit = Appkit();
  appkit.registerBundle({
    id: 'ak',
    name: 'Appkit Essentials',
    components: [
      { id: 'dashboard', name: 'Dashboard', type: "App" },
      { id: 'contacts', name: 'Contacts', type: "App" },
      { id: 'documents', name: 'Documents', type: "App" },
      {
        id: 'messages', name: 'Messages', type: "App", actions: [
          {
            type: 'Share',
            accepts: [
              {
                types: ['text/vcard']
              }
            ]

          }
        ]
      }
    ]
  } as Bundle);

};
