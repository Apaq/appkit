import { Context, ContextAvailable } from '@appkitjs.com/types';
import { Component, Element, h, Method } from '@stencil/core';

@Component({
  tag: 'ak-documents',
  styleUrl: 'documents.css',
  shadow: true,
})
export class Documents implements ContextAvailable {
  @Element() hostElement: HTMLAkContactsElement;
  context: Context;

  @Method()
  async onContextAvailable(context: Context) {
    this.context = context;
  }

  render() {
    return (
      <span>Documents</span>
    );
  }
}