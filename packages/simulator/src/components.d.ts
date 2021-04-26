/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults } from "@stencil/router";
export namespace Components {
    interface AkAppContainer {
        "appId": string;
        "bundleId": string;
    }
    interface AkContacts {
    }
    interface AkDashboard {
    }
    interface AkDocuments {
    }
    interface AkMessages {
    }
    interface AkTopbar {
    }
    interface AppHome {
    }
    interface AppProfile {
        "match": MatchResults;
    }
    interface AppRoot {
    }
    interface NavMenu {
    }
    interface NavMenuItem {
        "link": string;
    }
    interface NavSidebar {
    }
}
declare global {
    interface HTMLAkAppContainerElement extends Components.AkAppContainer, HTMLStencilElement {
    }
    var HTMLAkAppContainerElement: {
        prototype: HTMLAkAppContainerElement;
        new (): HTMLAkAppContainerElement;
    };
    interface HTMLAkContactsElement extends Components.AkContacts, HTMLStencilElement {
    }
    var HTMLAkContactsElement: {
        prototype: HTMLAkContactsElement;
        new (): HTMLAkContactsElement;
    };
    interface HTMLAkDashboardElement extends Components.AkDashboard, HTMLStencilElement {
    }
    var HTMLAkDashboardElement: {
        prototype: HTMLAkDashboardElement;
        new (): HTMLAkDashboardElement;
    };
    interface HTMLAkDocumentsElement extends Components.AkDocuments, HTMLStencilElement {
    }
    var HTMLAkDocumentsElement: {
        prototype: HTMLAkDocumentsElement;
        new (): HTMLAkDocumentsElement;
    };
    interface HTMLAkMessagesElement extends Components.AkMessages, HTMLStencilElement {
    }
    var HTMLAkMessagesElement: {
        prototype: HTMLAkMessagesElement;
        new (): HTMLAkMessagesElement;
    };
    interface HTMLAkTopbarElement extends Components.AkTopbar, HTMLStencilElement {
    }
    var HTMLAkTopbarElement: {
        prototype: HTMLAkTopbarElement;
        new (): HTMLAkTopbarElement;
    };
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLNavMenuElement extends Components.NavMenu, HTMLStencilElement {
    }
    var HTMLNavMenuElement: {
        prototype: HTMLNavMenuElement;
        new (): HTMLNavMenuElement;
    };
    interface HTMLNavMenuItemElement extends Components.NavMenuItem, HTMLStencilElement {
    }
    var HTMLNavMenuItemElement: {
        prototype: HTMLNavMenuItemElement;
        new (): HTMLNavMenuItemElement;
    };
    interface HTMLNavSidebarElement extends Components.NavSidebar, HTMLStencilElement {
    }
    var HTMLNavSidebarElement: {
        prototype: HTMLNavSidebarElement;
        new (): HTMLNavSidebarElement;
    };
    interface HTMLElementTagNameMap {
        "ak-app-container": HTMLAkAppContainerElement;
        "ak-contacts": HTMLAkContactsElement;
        "ak-dashboard": HTMLAkDashboardElement;
        "ak-documents": HTMLAkDocumentsElement;
        "ak-messages": HTMLAkMessagesElement;
        "ak-topbar": HTMLAkTopbarElement;
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "nav-menu": HTMLNavMenuElement;
        "nav-menu-item": HTMLNavMenuItemElement;
        "nav-sidebar": HTMLNavSidebarElement;
    }
}
declare namespace LocalJSX {
    interface AkAppContainer {
        "appId"?: string;
        "bundleId"?: string;
    }
    interface AkContacts {
    }
    interface AkDashboard {
    }
    interface AkDocuments {
    }
    interface AkMessages {
    }
    interface AkTopbar {
    }
    interface AppHome {
    }
    interface AppProfile {
        "match"?: MatchResults;
    }
    interface AppRoot {
    }
    interface NavMenu {
    }
    interface NavMenuItem {
        "link"?: string;
    }
    interface NavSidebar {
    }
    interface IntrinsicElements {
        "ak-app-container": AkAppContainer;
        "ak-contacts": AkContacts;
        "ak-dashboard": AkDashboard;
        "ak-documents": AkDocuments;
        "ak-messages": AkMessages;
        "ak-topbar": AkTopbar;
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "nav-menu": NavMenu;
        "nav-menu-item": NavMenuItem;
        "nav-sidebar": NavSidebar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ak-app-container": LocalJSX.AkAppContainer & JSXBase.HTMLAttributes<HTMLAkAppContainerElement>;
            "ak-contacts": LocalJSX.AkContacts & JSXBase.HTMLAttributes<HTMLAkContactsElement>;
            "ak-dashboard": LocalJSX.AkDashboard & JSXBase.HTMLAttributes<HTMLAkDashboardElement>;
            "ak-documents": LocalJSX.AkDocuments & JSXBase.HTMLAttributes<HTMLAkDocumentsElement>;
            "ak-messages": LocalJSX.AkMessages & JSXBase.HTMLAttributes<HTMLAkMessagesElement>;
            "ak-topbar": LocalJSX.AkTopbar & JSXBase.HTMLAttributes<HTMLAkTopbarElement>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "nav-menu": LocalJSX.NavMenu & JSXBase.HTMLAttributes<HTMLNavMenuElement>;
            "nav-menu-item": LocalJSX.NavMenuItem & JSXBase.HTMLAttributes<HTMLNavMenuItemElement>;
            "nav-sidebar": LocalJSX.NavSidebar & JSXBase.HTMLAttributes<HTMLNavSidebarElement>;
        }
    }
}