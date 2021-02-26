import { Webstore } from "./webstore";

declare var window: {__webstore__: Webstore}
export function webstore(): Webstore { return window.__webstore__; }