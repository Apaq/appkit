import { ComponentInformation, Context } from '@appkitjs.com/types';
import { Component, Element, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'ak-app-list',
  styleUrl: 'app-list.scss',
  shadow: true,
})
export class AppList {
  @Element() hostElement: HTMLAkAppListElement;
  @Prop() context: Context;

  @State() apps: ComponentInformation[] = [];
  @State() favoriteApps: ComponentInformation[] = [];

  @Watch('context')
  async onContextAvailable() {
    if(this.context != null) {
      // List all apps
      this.apps = this.context.getComponents();

      const favorites = this.context.getDeviceSettings().getObject<ComponentInformation[]>('favorites');
      this.favoriteApps = favorites ?? [];
    }
  }

  componentWillLoad() {
    this.onContextAvailable();
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
        <sl-page-header header="Apps" sticky="true" class="mb-4"></sl-page-header>

        <div class="grid grid-cols-3 gap-6 mx-8">
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