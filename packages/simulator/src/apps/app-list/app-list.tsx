import { Component as App, Context}  from '@appkitjs.com/core';
import { Component, Element, h, State } from '@stencil/core';

declare function createAppContext(el: HTMLElement): Context;

@Component({
  tag: 'ak-app-list',
  styleUrl: 'app-list.css',
  shadow: true,
})
export class AppList {
  @Element() hostElement: HTMLAkAppListElement;
  context: Context;

  @State() apps: App[] = [];

  componentDidLoad() {
    this.context = createAppContext(this.hostElement);

    // List all apps
    this.apps = this.context.getComponents();
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
                <p class="mt-1 text-gray-500 text-sm truncate">Regional Paradigm Technician</p>
              </div>
              <img class="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=zRHWOXxq8j&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="" />
            </div>
            <div>
              <div class="-mt-px flex divide-x divide-gray-200">
                <div class="w-0 flex-1 flex">
                  <a href="mailto:janecooper@example.com" class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                    <span class="ml-3">View Details</span>
                  </a>
                </div>
                <div class="-ml-px w-0 flex-1 flex">
                  <a href="tel:+1-202-555-0170" class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
                    <span class="ml-3">Install</span>
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