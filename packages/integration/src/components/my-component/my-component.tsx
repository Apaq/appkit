import { Component, Prop, h, Element } from '@stencil/core';
import { Context, createContext, IData } from '@webstore/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Element() el: HTMLElement;
  context: Context;

  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  componentDidRender() {
    this.context = createContext(this.el);
    this.context.receiver = (data: IData) => {
      console.log('Please load: ', data);
    }
  }

  private getText(): string {
    return 'Hello world'
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
