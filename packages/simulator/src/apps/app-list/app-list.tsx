import {AppkitRegistry, ComponentInformation} from '@appkitjs.com/types';
import { Component, Element, h, State } from '@stencil/core';

declare var appkit: AppkitRegistry;

@Component({
  tag: 'ak-app-list',
  styleUrl: 'app-list.scss',
  shadow: true,
})
export class AppList {
  @Element() hostElement: HTMLAkAppListElement;

  @State() apps: ComponentInformation[] = [];
  @State() favoriteApps: ComponentInformation[] = [];

  componentWillLoad() {
    // List all apps
    const context = appkit.globalContext;
    this.apps = context.getComponents();

    const favorites = context.getDeviceSettings().getObject<ComponentInformation[]>('favorites');
    this.favoriteApps = favorites ?? [];
  }

  open(app: ComponentInformation) {
    const context = appkit.globalContext;
    context.startApp(app.bundleId, app.id);
  }

  favorite(app: ComponentInformation) {
    console.log(app);
    this.favoriteApps.push(app);
    const context = appkit.globalContext;
    context.getDeviceSettings().setObject('favorites', this.favoriteApps);
  }

  render() {
    return (
      <div>
        <sl-page-header header="Apps" sticky="true" class="mb-4"></sl-page-header>

        <div class="grid grid-cols-4 gap-6 mx-8">
          {this.apps.map((app) =>

            <sl-card class="card-footer">
              {app.name}
              <div slot="footer">

                <sl-button onClick={_ => this.favorite(app)} class="mr-3">Favor</sl-button>
                <sl-button type="primary" onClick={_ => this.open(app)}>Open</sl-button>
              </div>
            </sl-card>

          )}
        </div>
      </div>
    )
  }
}
