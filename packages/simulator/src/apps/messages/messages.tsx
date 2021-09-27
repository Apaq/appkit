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
        if(this.context.action != null) {
            alert(this.context.action);
        }
    }

    render() {
        return (
            <span>Messages</span>
        );
    }
}