import { Context } from '@appkitjs.com/core';
import { Component, Element, h } from '@stencil/core';

declare function createContext(el: HTMLElement): Context;

@Component({
  tag: 'ak-dashboard',
  styleUrl: 'dashboard.css',
  shadow: true,
})
export class Dashboard {
  @Element() hostElement: HTMLAkContactsElement;
  context: Context;

  componentDidRender() {
    this.context = createContext(this.hostElement);
  }

  render() {
    return (
        <span>Dashboard</span>
    );
  }
}