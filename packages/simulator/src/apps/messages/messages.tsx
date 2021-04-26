import { Context } from '@appkitjs.com/core';
import { Component, Element, h } from '@stencil/core';

declare function createContext(el: HTMLElement): Context;

@Component({
    tag: 'ak-messages',
    styleUrl: 'messages.css',
    shadow: true,
})
export class Messages {
    @Element() hostElement: HTMLAkContactsElement;
    context: Context;

    componentDidRender() {
      this.context = createContext(this.hostElement);
      this.context.extensionHandler = (type, data) => {
          alert(type +'-' + data);
      }
    }

    render() {
        return (
            <span>Messages</span>
        );
    }
}