import { Context, ContextAvailable } from '@appkitjs.com/types';
import { Component, Element, h, Method, State } from '@stencil/core';
import { Order } from '../../global/providers/orders-providers';
import { Page } from "@apaq/leap-data-core";

@Component({
  tag: 'ak-orders',
  styleUrl: 'orders.css',
  shadow: true,
})
export class Orders implements ContextAvailable {
  @Element() hostElement: HTMLAkOrdersElement;
  context: Context;

  @State() orders: Page<Order>;

  @Method()
  async onContextAvailable(context: Context) {
    this.context = context;

    
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
        {this.orders?.content.map((c) => 
          <div>{c.contactName}</div>
        )}

      </div>
    )
  }
}