import { Appkit } from "./appkit";
import { Context } from "./context";

/**
 * This sets up the global appkit variable
 */
 declare var window: {__appkit__: Appkit, createAppContext: (el: HTMLElement) => Context};
 if(typeof window.__appkit__ === 'undefined') {
     window.__appkit__ = {
         contexts: null, 
         content: null, 
         contentProvider: null
     }
 }
 
 /**
  * This exports the global appkit variable for other files to import.
  */
 export function appkit(): Appkit { return window.__appkit__; }