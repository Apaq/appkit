import { Appkit } from '@appkitjs.com/integration';
import { Component, Element, h, Host, Prop } from '@stencil/core';

@Component({
    tag: 'ak-app-container',
    styleUrl: 'app-container.css',
    shadow: true,
})
export class AppContainer {
    @Element() hostElement: HTMLAkAppContainerElement;
    el: HTMLDivElement;
    @Prop() bundleId: string;
    @Prop() appId: string;

    appkit = Appkit();

    componentDidRender() {
        while(this.hostElement.firstChild) {
            this.hostElement.firstChild.remove();
        }
        var app = this.appkit.resolveAppManagerById(this.bundleId, this.appId);
        app.open(this.el);
    }

    render() {
        return (
            <Host>Container
                <div ref={el => this.el = el}></div>
            </Host>
        );
    }
}