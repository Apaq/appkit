import { Context } from '@appkitjs.com/types';
import { Component, Element, h, Prop, State, Watch } from '@stencil/core';
import { Order } from '../../global/providers/orders-providers';
import { Page } from "@apaq/leap-data-core";

@Component({
  tag: 'ak-orders',
  styleUrl: 'orders.css',
  shadow: true,
})
export class Orders {
  @Element() hostElement: HTMLAkOrdersElement;
  @Prop() context: Context;

  @State() orders: Page<Order>;

  @Watch('context')
  async onContextAvailable() {
    
    // Get contacts
    const contactResolver = this.context.getContentResolver().resolve<Order, string>('content://orders');
    contactResolver.findAll().then(page => {
      this.orders = page;
    });
  }

  render() {
    return (
      <div>
        <sl-page-header header="Orders">
          <sl-button slot="actions" type="primary" size="small">Create</sl-button>
        </sl-page-header>
        <hr></hr>
        <sl-table>
          <sl-column>Contact</sl-column>
          {this.orders?.content.map((c) =>
            <sl-row>
              <sl-cell>{c.contactName}</sl-cell>
            </sl-row>
          )}
        </sl-table>
      </div>
    )
  }
}