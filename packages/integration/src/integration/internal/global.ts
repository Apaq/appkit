import { WebstoreIntegration } from "./webstore-integation";

declare var window: {__webstore__: WebstoreIntegration}
export function webstore(): WebstoreIntegration { return window.__webstore__; }