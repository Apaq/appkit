import { Component, h } from '@stencil/core';

@Component({
  tag: 'ak-contacts',
  styleUrl: 'contacts.css',
  shadow: true,
})
export class Dashboard {
  render() {
    return (
        <span>Contacts</span>
    );
  }
}