import { Component, h, Element, State } from '@stencil/core';
import { Context, IData } from '@webstore/core';

declare function createAppContext(el: HTMLElement): Context;

@Component({
  tag: 'ws-helloworld',
  styleUrl: 'helloworld.css',
  shadow: true,
})
export class HelloWorld {
  @Element() el: HTMLElement;
  context: Context;


  @State() text: string = 'Hello World!';


  componentDidRender() {
    console.log('rendered');
    this.context = createAppContext(this.el);
    this.context.receiver = (data: IData) => {
      console.log('Please load: ', data);
      const client = this.context.getContentResolver().resolve(data.uri);
      client.query().then(result => {
        console.log(result);
        this.text += ' I Just loaded some data';
      });
      
    }
  }

  render() {
    return <div>{this.text}</div>;
  }
}
