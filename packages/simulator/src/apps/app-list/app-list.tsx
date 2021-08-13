import { ComponentInformation, Context, ContextAvailable} from '@appkitjs.com/types';
import { Component, Element, h, Method, State } from '@stencil/core';

@Component({
  tag: 'ak-app-list',
  styleUrl: 'app-list.css',
  shadow: true,
})
export class AppList implements ContextAvailable {
  @Element() hostElement: HTMLAkAppListElement;
  context: Context;

  @State() apps: ComponentInformation[] = [];
  @State() favoriteApps: ComponentInformation[] = [];

  @Method()
  async onContextAvailable(context: Context) {
    this.context = context;

    // List all apps
    this.apps = this.context.getComponents();
    
    const favorites = this.context.getDeviceSettings().getObject<ComponentInformation[]>('favorites');
    this.favoriteApps = favorites ?? [];
  }

  open(app: ComponentInformation) {
      this.context.startApp(app.bundleId, app.id);
  }

  favorite(app: ComponentInformation) {
    console.log(app);
    this.favoriteApps.push(app);
    this.context.getDeviceSettings().setObject('favorites', this.favoriteApps);
  }

  render() {
    return (
      <div>
        <sl-page-header header="Apps" class="sticky top-0 border-b mb-2"></sl-page-header>

        <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {this.apps.map((app) =>
          <li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
            <div class="w-full flex items-center justify-between p-6 space-x-6">
              <div class="flex-1 truncate">
                <div class="flex items-center space-x-3">
                  <h3 class="text-gray-900 text-sm font-medium truncate">{app.name}</h3>
                </div>
                <p class="mt-1 text-gray-500 text-sm truncate">{app.type}</p>
              </div>
            </div>
            <div>
              <div class="-mt-px flex divide-x divide-gray-200">
                <div class="w-0 flex-1 flex">
                  <a onClick={_ => this.open(app)} class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                    <span class="ml-3">Open</span>
                  </a>
                </div>
                <div class="-ml-px w-0 flex-1 flex">
                  <a onClick={_ => this.favorite(app)} class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
                    <sl-icon name="heart"></sl-icon>
                    <span class="ml-3">Favorite</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
         )}
        </ul>
      </div>
    )
  }
}