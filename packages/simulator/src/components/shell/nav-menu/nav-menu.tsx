import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'nav-menu',
  styleUrl: 'nav-menu.css',
  shadow: true,
})
export class NavMenu {

  render() {
    return (
      <Host>
        <nav class="flex-1 px-2 py-4 bg-gray-800 space-y-1">
        <slot></slot>
        </nav>
      </Host>
    );
  }

}
