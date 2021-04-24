import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'nav-menu-item',
  styleUrl: 'nav-menu-item.css',
  shadow: true,
})
export class NavMenuItem {

  @Prop() link: string;

  render() {
    return (
      <Host>
        <stencil-route-link url={this.link}>
        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
          <svg class="text-gray-400 group-hover:text-gray-300 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <slot></slot>
        </a></stencil-route-link>
      </Host>
    );
  }

}
