import { Context } from '@appkitjs.com/core';
import { Component, Element, h } from '@stencil/core';

declare function createContext(el: HTMLElement): Context;

@Component({
  tag: 'ak-contacts',
  styleUrl: 'contacts.css',
  shadow: true,
})
export class Contacts {
  @Element() hostElement: HTMLAkContactsElement;
  context: Context;

  componentDidRender() {
    this.context = createContext(this.hostElement);
  }

  getApps() {
    // TODO: How to resolve and open apps?
  }
  render() {
    return (
        <span>Contacts</span>
    );
  }
}