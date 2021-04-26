import { Context } from '@appkitjs.com/core';
import { Component, Element, h } from '@stencil/core';

declare function createContext(el: HTMLElement): Context;

@Component({
  tag: 'ak-documents',
  styleUrl: 'documents.css',
  shadow: true,
})
export class Documents {
  @Element() hostElement: HTMLAkContactsElement;
  context: Context;

  componentDidRender() {
    this.context = createContext(this.hostElement);
  }

  render() {
    return (
      <span>Documents</span>
    );
  }
}