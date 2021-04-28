import { Component as App, Context } from '@appkitjs.com/core';
import { Component, Element, h, State } from '@stencil/core';

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

  componentDidLoad() {
    this.context = createAppContext(this.hostElement);
    this.apps = this.context.getComponents('Share', {uri: 'content://contacts/1221312', type: 'text/vcard'});
  }

  render() {
    return (
      <div>
        <div class="text-md font-sans">Contacts</div>
        <hr></hr>
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