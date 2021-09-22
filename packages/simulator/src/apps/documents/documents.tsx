import { Context } from '@appkitjs.com/types';
import { Component, Element, h, Prop } from '@stencil/core';

@Component({
  tag: 'ak-documents',
  styleUrl: 'documents.css',
  shadow: true,
})
export class Documents {
  @Element() hostElement: HTMLAkContactsElement;
  @Prop() context: Context;

  render() {
    return (
      <span>Documents</span>
    );
  }
}