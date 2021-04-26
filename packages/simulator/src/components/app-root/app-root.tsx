import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div class="h-screen flex overflow-hidden bg-gray-100">
        <nav-sidebar></nav-sidebar>
        <div class="flex flex-col w-0 flex-1 overflow-hidden">
          <ak-topbar></ak-topbar>
          <main class="flex-1 relative overflow-y-auto focus:outline-none">
          
            <stencil-router>
              <stencil-route-switch scrollTopOffset={0}>
                <stencil-route url="/" component="app-home" exact={true} />
                <stencil-route url="/dashboard" component="ak-app-container" componentProps={{ 'bundleId': 'ak', 'appId': 'dashboard' }}  />
                <stencil-route url="/contacts" component="ak-app-container" componentProps={{ 'bundleId': 'ak', 'appId': 'contacts' }}  />
                <stencil-route url="/documents" component="ak-app-container" componentProps={{ 'bundleId': 'ak', 'appId': 'documents' }}  />
              </stencil-route-switch>
            </stencil-router>
          </main>
        </div>
      </div>
    );
  }
}