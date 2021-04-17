import { Component, h, Element, State } from '@stencil/core';
import { Context, IData } from '@appkit/core';

declare function createAppContext(el: HTMLElement): Context;

@Component({
  tag: 'appkit-helloworld',
  styleUrl: 'helloworld.css',
  shadow: true,
})
export class HelloWorld {
  @Element() el: HTMLElement;
  context: Context;


  @State() text: string = 'Hello World!';


  componentDidRender() {
    this.context = createAppContext(this.el);
    this.context.receiver = (data: IData) => this.onData(data);
  }

  onData(data: IData) {
    // Data received. Get content client.
    const client = this.context.getContentResolver().resolve(data.uri);
      // Load data from client
      client.query().then(result => {
        console.log(result);
        this.text += ' I Just loaded some data';
      });
  }

  render() {
    return <div>{this.text}</div>;
  }
}
