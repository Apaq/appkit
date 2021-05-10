import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'ak-topbar',
    styleUrl: 'topbar.css',
    shadow: true,
})
export class NavSidebar {

    render() {
        return (
            <Host>
                <div class="relative z-10 flex-shrink-0 flex h-12 bg-gray-900">

                    <div class="flex-1 px-4 flex justify-between">
                        <div class="flex-1 flex">
                            <form class="w-full flex md:ml-0" action="#" method="GET">
                                <label htmlFor="search_field" class="sr-only">Search</label>
                                <div class="relative w-full text-gray-400 focus-within:text-gray-500">
                                    <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <input id="search_field" class="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-300 placeholder-gray-400 focus:outline-none focus:placeholder-gray-500 focus:ring-0 focus:border-transparent sm:text-sm bg-gray-900" placeholder="Search" type="search" name="search" />
                                </div>
                            </form>
                        </div>
                        <div class="ml-4 flex items-center md:ml-6">
                            <sl-icon-button name="bell" label="Notifications"></sl-icon-button>


                            <div class="ml-3 relative">
                                <sl-avatar
                                    image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=zRHWOXxq8j&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="John Doe"
                                ></sl-avatar>

                            </div>
                        </div>
                    </div>
                </div>
            </Host>
        );
    }

}









