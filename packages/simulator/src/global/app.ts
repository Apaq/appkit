import { Appkit, Bundle } from '@appkitjs.com/integration';

export default async () => {

  const appkit = Appkit();
  appkit.registerBundle({
    id: 'ak',
    name: 'Appkit Essentials',
    components: [
        { id: 'dashboard', name: 'Dashboard', type: "App" },
        { id: 'contacts', name: 'Contacts', type: "App" },
        { id: 'documents', name: 'Documents', type: "App" }
    ]
  } as Bundle);

};
