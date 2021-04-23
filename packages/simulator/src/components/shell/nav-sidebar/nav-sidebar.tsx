import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'nav-sidebar',
  styleUrl: 'nav-sidebar.css',
  shadow: true,
})
export class NavSidebar {

  render() {
    return (
      <Host>
         <div class="flex flex-shrink-0">
          <div class="flex flex-col w-64">
            <div class="flex flex-col h-0 flex-1">
              <div class="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Appkit"/>
              </div>
              <nav-menu>
                <nav-menu-item>Dashboard</nav-menu-item>
                <nav-menu-item>Contacts</nav-menu-item>
                <nav-menu-item>Agreements</nav-menu-item>
                <nav-menu-item>Orders</nav-menu-item>
                <nav-menu-item>Calendar</nav-menu-item>
                <nav-menu-item>Settings</nav-menu-item>
              </nav-menu>
            </div>

          </div>
          </div>
      </Host>
    );
  }

}
