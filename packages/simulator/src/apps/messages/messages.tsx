import { Context } from '@appkitjs.com/types';
import { Component, Element, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'ak-messages',
    styleUrl: 'messages.css',
    shadow: true,
})
export class Messages {
    @Element() hostElement: HTMLAkContactsElement;
    @Prop() context: Context;

    @Watch('context')
    async onContextAvailable() {
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