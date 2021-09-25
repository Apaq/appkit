import { Bundle } from '@appkitjs.com/types';

export default {
    id: 'ak',
    name: 'Appkit Essentials',
    components: [
      { id: 'dashboard', name: 'Dashboard', type: "App" },
      { id: 'contacts', name: 'Contacts', type: "App"
      },
      { id: 'orders', name: 'Orders', type: "App", actions: [
        {
          type: 'Share',
          accepts: ['application/appkit.contact']
        }
      ] 
      },
      { id: 'documents', name: 'Documents', type: "App" },
      {
        id: 'messages', name: 'Messages', type: "App", actions: [
          {
            type: 'Share',
            accepts: ['application/appkit.contact']
          }
        ]
      },
      { id: 'app-list', name: 'Apps', type: "App" }
    ]
  } as Bundle;