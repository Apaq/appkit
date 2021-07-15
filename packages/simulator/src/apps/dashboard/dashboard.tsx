import { Context, ContextAvailable } from '@appkitjs.com/core';
import { Component, Element, h, Method } from '@stencil/core';

@Component({
  tag: 'ak-dashboard',
  styleUrl: 'dashboard.css',
  shadow: true,
})
export class Dashboard implements ContextAvailable {
  @Element() hostElement: HTMLAkContactsElement;
  context: Context;

  @Method()
  async onContextAvailable(context: Context) {
    this.context = context;
  }

  render() {
    return (
        <span>Dashboard</span>
    );
  }
}