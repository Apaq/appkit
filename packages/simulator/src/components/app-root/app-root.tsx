import { App } from '@appkitjs.com/types';
import { Component, h } from '@stencil/core';
import { Appkit } from '@appkitjs.com/core';

@Component({
  tag: 'ak-simulator',
  styleUrl: 'app-root.css',
  shadow: false
})
export class AppRoot {

  appkit = Appkit();
  favorites: App[] = [];

  componentWillLoad() {
    const favs = [];
    for(let info of favs) {

      this.tryAddApp(info.bundleId, info.id);
    }

    this.tryAddApp('ak', 'app-list');
  }

  private tryAddApp(bundleId: string, appId: string) {
    const app = this.appkit.resolveAppById(bundleId, appId);
    if(app != null) {
      this.favorites.push(app);
    }
  }

  render() {
    return (
      <div>
        <nav-sidebar></nav-sidebar>
        <div class="main-wrapper">
          <main>
          
            <stencil-router>
              <stencil-route-switch scrollTopOffset={0}>
                <stencil-route url="/" component="app-home" exact={true}>
                  <stencil-route-redirect url="/app-list" />
                </stencil-route>
                {this.favorites.map((app) =>
                  <stencil-route url={'/' + app.id} component="ak-app-container" componentProps={{ 'bundleId': app.bundle.prefix, 'appId': app.id }}  />
                )}

              </stencil-route-switch>
            </stencil-router>
          </main>
        </div>
      </div>
    );
  }
}
