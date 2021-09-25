import { ComponentDefinition, Context } from '@appkitjs.com/types';
import { Component, Element, h, Prop, State, Watch } from '@stencil/core';
import { Contact } from '../../global/providers/contact-provider';
import { Page } from "@apaq/leap-data-core";

@Component({
  tag: 'ak-contacts',
  styleUrl: 'contacts.css',
  shadow: true,
})
export class Contacts {
  @Element() hostElement: HTMLAkContactsElement;
  @Prop() context: Context;

  @State() apps: ComponentDefinition[] = [];
  @State() contacts: Page<Contact>;
  @State() token: string;

  @Watch('context')
  async onContextAvailable(){
    this.token = this.context.getSessionSettings().getString('token');

    // List apps
    this.apps = this.context.getComponents({type: 'Share', data: { uri: 'content://contacts/1221312', type: 'application/appkit.contact' }});

    // Get contacts
    const contactResolver = this.context.getContentResolver().resolve<Contact, string>('content://contacts');
    contactResolver.findAll().then(page => {
      this.contacts = page;
    });
  }

  render() {
    return (
      <div>
        <sl-page-header header="Contacts" sticky="true" class="mb-2">
          <sl-button slot="actions" type="primary" size="small">Create</sl-button>
          <sl-button slot="actions" size="small" class="ml-2">
            <sl-icon name="three-dots"></sl-icon>
          </sl-button>
        </sl-page-header>
        token: {this.token}
        <sl-table>
        <sl-column>Name</sl-column>
        <sl-column>Title</sl-column>
        <sl-column>Email</sl-column>
        <sl-column>Role</sl-column>
        {this.contacts?.content.map((c) =>
        <sl-row>
          <sl-cell>{c.name}</sl-cell>
          </sl-row>
        )}
        </sl-table>
        
      </div>
    )
  }
}