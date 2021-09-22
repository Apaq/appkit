import { Context } from '@appkitjs.com/types';
import { Component, Element, h, Prop } from '@stencil/core';

@Component({
  tag: 'ak-dashboard',
  styleUrl: 'dashboard.css',
  shadow: true,
})
export class Dashboard {
  @Element() hostElement: HTMLAkContactsElement;
  @Prop() context: Context;

  render() {
    return (
        <span>Dashboard</span>
    );
  }
}