import { Webstore } from "./webstore";

declare var window: { webstore: Webstore }
window.webstore = new Webstore();