import { Context} from './context';
import { createContext } from './context-manager';

export * from './content/content-provider';
export * from './content/content-provider-client';
export * from './content/content-provider-registry';
export * from './content/content-resolver';
export * from './context-manager';
export * from './context';
export * from './data';
export * from './logger';
export * from './registry';
export * from './global';

declare var window: {createAppContext: (el: HTMLElement) => Context};
window.createAppContext = createContext;
