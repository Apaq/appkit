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

  componentDidLoad() {
    this.context = createAppContext(this.hostElement);

    // List apps
    this.apps = this.context.getComponents('Share', {uri: 'content://contacts/1221312', type: 'text/vcard'});

    // Get contacts
    const contactResolver = this.context.getContentResolver().resolve<Contact, string>('content://contacts');
    contactResolver.query().then(page => {
      this.contacts = page;
    });
  }

  render() {
    return (
      <div>
        <div class="text-md font-sans">Contacts ({this.contacts?.totalElements})</div>
        <hr></hr>
        {this.contacts?.content.map((c) => 
          <div>{c.name}</div>
        )}

        Compatible Apps:
        {this.apps.map((c) =>
          <div>
            <div>{c.name}</div>
            <sl-button>Woohoo</sl-button>
            <sl-button type="primary" class="ml-3">Woohoo</sl-button>
          </div>
        )}
      </div>
    )
  }
}