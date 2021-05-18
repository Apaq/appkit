import { Component as App, Context, Page } from '@appkitjs.com/core';
import { Component, Element, h, State } from '@stencil/core';
import { Contact } from '../../global/providers/contact-provider';

declare function createAppContext(el: HTMLElement): Context;

@Component({
  tag: 'ak-contacts',
  styleUrl: 'contacts.css',
  shadow: true,
})
export class Contacts {
  @Element() hostElement: HTMLAkContactsElement;
  context: Context;

  @State() apps: App[] = [];
  @State() contacts: Page<Contact>;
  @State() token: string;

  componentDidLoad() {
    this.context = createAppContext(this.hostElement);
    this.token = this.context.getSessionSettings().getString('token');

    // List apps
    this.apps = this.context.getComponents({type: 'Share', data: { uri: 'content://contacts/1221312', type: 'application/appkit.contact' }});

    // Get contacts
    const contactResolver = this.context.getContentResolver().resolve<Contact, string>('content://contacts');
    contactResolver.query().then(page => {
      this.contacts = page;
    });
  }

  render() {
    return (
      <div>
        <sl-page-header header="Contacts" class="sticky top-0 border-b mb-2">
          <sl-button slot="actions" type="primary" size="small">Create</sl-button>
          <sl-button slot="actions" size="small" class="ml-2">
            <sl-icon name="three-dots"></sl-icon>
          </sl-button>
        </sl-page-header>
        token: {this.token}
        <div class="flex flex-col p-4">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden border-b border-gray-200 sm:rounded-lg shadow ">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
              </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Title
              </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
              </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Role
              </th>
                      <th scope="col" class="relative px-6 py-3">
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    {this.contacts?.content.map((c) =>

                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {c.name}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Regional Paradigm Technician
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          jane.cooper@example.com
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Admin
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <sl-dropdown hoist>
                          <sl-button size="small" slot="trigger"><sl-icon name="three-dots"></sl-icon></sl-button>
                          <sl-menu>
                            <sl-menu-label>Open with...</sl-menu-label>
                            {this.apps.map((a) =>
                              <sl-menu-item>{a.name}</sl-menu-item>
                            )}
                          </sl-menu>
                        </sl-dropdown>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}