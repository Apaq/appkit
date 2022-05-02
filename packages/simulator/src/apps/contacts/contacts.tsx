import 'reflect-metadata';
import { App, AppkitRegistry } from '@appkitjs.com/types';
import { Component, Element, h, State } from '@stencil/core';
import { SuperService } from '../../global/app';
import {container} from "tsyringe";

declare var Appkit: AppkitRegistry;


@Component({
  tag: 'ak-contacts',
  styleUrl: 'contacts.css',
  shadow: true,
})
export class Contacts {
  @Element() hostElement: HTMLAkContactsElement;

  @State() apps: App[] = [];
  @State() token: string;

  service: SuperService = container.resolve("SuperDuperService");

  render() {
    return (
      <div>
        <sl-page-header header="Contacts" sticky="true" class="mb-2">
          <sl-button slot="actions" type="primary" size="small" onClick={ev => alert(ev)}>Create</sl-button>
          <sl-button slot="actions" size="small" class="ml-2">
            <sl-icon name="three-dots"></sl-icon>
          </sl-button>
        </sl-page-header>
        token: {this.token}
        {this.service.strings().map(e => <p>{e}</p>)}
        <sl-table>
        <sl-column>Name</sl-column>
        <sl-column>Title</sl-column>
        <sl-column>Email</sl-column>
        <sl-column>Role</sl-column>
        
        </sl-table>

      </div>
    )
  }
}
