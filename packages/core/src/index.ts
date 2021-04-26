import { Context } from './context/context';
import { createContext } from './context/context-manager';

export * from './bundle/index';
export * from './content/content-provider';
export * from './content/content-provider-client';
export * from './content/content-provider-registry';
export * from './content/content-resolver';
export * from './context/context';
export * from './data';
export * from './logger';
export * from './registry';
export * from './global';

declare var window: {createAppContext: (el: HTMLElement) => Context};
window.createAppContext = createContext;
