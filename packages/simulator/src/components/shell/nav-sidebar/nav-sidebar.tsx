import { Appkit } from '@appkitjs.com/core';
import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'nav-sidebar',
  styleUrl: 'nav-sidebar.css',
  shadow: true,
})
export class NavSidebar {

  appkit = Appkit();
  apps: any[] = [];

  componentWillLoad() {
    this.apps.push(this.appkit.resolveAppManagerById('ak', 'dashboard'));
    this.apps.push(this.appkit.resolveAppManagerById('ak', 'contacts'));
    this.apps.push(this.appkit.resolveAppManagerById('ak', 'orders'));
    this.apps.push(this.appkit.resolveAppManagerById('ak', 'documents'));
    this.apps.push(this.appkit.resolveAppManagerById('ak', 'app-list'));
  }

  render() {
    return (
      <Host>
         <div class="flex flex-shrink-0">
          <div class="flex flex-col w-64">
            <div class="flex flex-col h-0 flex-1">
              <div class="flex items-center h-12 flex-shrink-0 px-4 bg-gray-900">
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Appkit"/>
              </div>
              <nav-menu>
                {this.apps.map((app) =>
                  <nav-menu-item link={'/' + app.id}>{app.name}</nav-menu-item>
                )}
              </nav-menu>
            </div>

          </div>
          </div>
      </Host>
    );
  }

}
