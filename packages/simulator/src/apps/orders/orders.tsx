import { Context, Page } from '@appkitjs.com/core';
import { Component, Element, h, State } from '@stencil/core';
import { Order } from '../../global/providers/orders-providers';

declare function createAppContext(el: HTMLElement): Context;

@Component({
  tag: 'ak-orders',
  styleUrl: 'orders.css',
  shadow: true,
})
export class Orders {
  @Element() hostElement: HTMLAkOrdersElement;
  context: Context;

  @State() orders: Page<Order>;

  componentDidLoad() {
    this.context = createAppContext(this.hostElement);

    
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