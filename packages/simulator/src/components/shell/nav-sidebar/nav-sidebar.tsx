import { Appkit } from '@appkitjs.com/core';
import { App, ComponentInformation } from '@appkitjs.com/types';
import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'nav-sidebar',
  styleUrl: 'nav-sidebar.css',
  shadow: true,
})
export class NavSidebar {

  appkit = Appkit();
  favorites: App[] = [];

  componentWillLoad() {
    const favs = this.appkit.getDeviceSettings().getObject<ComponentInformation[]>('favorites') ?? [];
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

  link(url: string) {
    window.location.pathname = url;
  }

  render() {
    return (
      <Host>
         <aside >
              <sl-menu>
                {this.favorites.map((app) =>
                  <sl-menu-item onClick={_ => this.link('/' + app.id)}>{app.name}</sl-menu-item>
                )}
              </sl-menu>

          </aside>
      </Host>
    );
  }

}
