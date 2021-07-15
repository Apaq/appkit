import { Context, ContextAvailable } from '@appkitjs.com/core';
import { Component, Element, h, Method } from '@stencil/core';

@Component({
    tag: 'ak-messages',
    styleUrl: 'messages.css',
    shadow: true,
})
export class Messages implements ContextAvailable {
    @Element() hostElement: HTMLAkContactsElement;
    context: Context;

    @Method()
    async onContextAvailable(context: Context) {
        this.context = context;
        this.context.extensionHandler = (type, data) => {
            alert(type + '-' + data);
        }
    }

    render() {
        return (
            <span>Messages</span>
        );
    }
}