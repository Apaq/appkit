import { Appkit, AppManager } from '@appkitjs.com/core';
import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {

  appkit = Appkit();
  favorites: AppManager[] = [];

  componentWillLoad() {
    /* TODO: Run through favorite apps and add them to the sidebar
    *  for(...) {
    *      this.apps.push(this.appkit.resolveAppManagerById(bundleId, appId));
    *  }
    */
    this.favorites.push(this.appkit.resolveAppManagerById('ak', 'app-list'));
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
