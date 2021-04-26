import { Appkit } from '@appkitjs.com/integration';
import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'ak-app-container',
    styleUrl: 'app-container.css',
    shadow: true,
})
export class AppContainer {
    el: HTMLDivElement;
    @Prop() bundleId: string;
    @Prop() appId: string;

    appkit = Appkit();

    componentDidRender() {
        var app = this.appkit.resolveAppManagerById(this.bundleId, this.appId);
        app.open(this.el);
    }

    render() {
        return (
            <div ref={el => this.el = el}></div>
        );
    }
}