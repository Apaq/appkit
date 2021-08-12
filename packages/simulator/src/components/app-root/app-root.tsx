import { AppManager, ComponentInformation } from '@appkitjs.com/types';
import { Component, h } from '@stencil/core';
import { Appkit } from '@appkitjs.com/core';

@Component({
  tag: 'ak-simulator',
  styleUrl: 'app-root.css',
  shadow: false
})
export class AppRoot {

  appkit = Appkit();
  favorites: AppManager[] = [];

  componentWillLoad() {
    const favs = this.appkit.getDeviceSettings().getObject<ComponentInformation[]>('favorites') ?? [];
    for(let info of favs) {
      this.favorites.push(this.appkit.resolveAppManagerById(info.bundleId, info.id));
    }

    const appList = this.appkit.resolveAppManagerById('ak', 'app-list');
    this.favorites.push(appList);
  }

  render() {
    return (
      <div class="h-screen flex overflow-hidden bg-gray-100">
        <nav-sidebar></nav-sidebar>
        <div class="flex flex-col w-0 flex-1 overflow-hidden">
          <ak-topbar></ak-topbar>
          <main class="flex-1 relative overflow-y-auto focus:outline-none">
          
            <stencil-router>
              <stencil-route-switch scrollTopOffset={0}>
                <stencil-route url="/" component="app-home" exact={true}>
                  <stencil-route-redirect url="/app-list" />
                </stencil-route>
                {this.favorites.map((app) =>
                  <stencil-route url={'/' + app.id} component="ak-app-container" componentProps={{ 'bundleId': app.bundle.id, 'appId': app.id }}  />
                )}

              </stencil-route-switch>
            </stencil-router>
          </main>
        </div>
      </div>
    );
  }
}
