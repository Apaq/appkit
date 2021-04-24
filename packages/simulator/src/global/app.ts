import { Appkit, Bundle } from '@appkitjs.com/integration';

export default async () => {

  const appkit = Appkit();
  appkit.registerBundle({
    id: 'ak',
    name: 'Appkit Essentials',
    components: [
        {
            id: 'dashboard',
            name: 'Dashboard',
            type: "App"
        }
    ]
  } as Bundle);

};
