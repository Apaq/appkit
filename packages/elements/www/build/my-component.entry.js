import { r as registerInstance, h, g as getElement } from './index-c07ed19a.js';

class ContentProviderClient {
    constructor(contentProvider) {
        this.contentProvider = contentProvider;
    }
    // TODO Should be some paging stuff
    async query() {
        return this.contentProvider.query();
    }
    async get(id) {
        return this.contentProvider.get(id);
    }
    async save(entity) {
        return this.contentProvider.save(entity);
    }
    async delete(id) {
        return this.contentProvider.delete(id);
    }
    close() {
    }
}

class Logger {
    static info(message) {
        if (!this.enabled)
            return;
        console.info(message);
    }
    static warn(message) {
        if (!this.enabled)
            return;
        console.warn(message);
    }
    static error(message) {
        if (!this.enabled)
            return;
        console.error(message);
    }
}
Logger.enabled = true;

class ContentProviderRegistry {
    constructor() {
        this._registry = {};
    }
    get(authority) {
        return this._registry[authority];
    }
    register(authority, contentProvider) {
        Logger.info(`Registering content provider: ${authority}`);
        if (this._registry[authority] == null) {
            this._registry[authority] = contentProvider;
        }
    }
}

function webstore() { return window.__webstore__; }

class ContentResolver {
    resolve(uri) {
        var _a;
        if (uri == null || !uri.startsWith('content://'))
            return null;
        const authority = uri.substring(10, uri.indexOf('/', 10));
        const provider = (_a = webstore().contentProvider) === null || _a === void 0 ? void 0 : _a.get(authority);
        return new ContentProviderClient(provider);
    }
}

class ContextImpl {
    constructor(contentResolver) {
        this.contentResolver = contentResolver;
    }
    getContentResolver() {
        return this.contentResolver;
    }
    set receiver(receiver) {
        this._receiver = receiver;
    }
    get receiver() {
        return this._receiver;
    }
}

class ContextManager {
    constructor() {
        // The list of registered contexts.
        this._contexts = {};
    }
    get(contextId) {
        return this._contexts[contextId];
    }
    // Create a new context.
    create(contextId) {
        Logger.info(`Creating context: ${contextId}`);
        const context = new ContextImpl(webstore().content);
        this._contexts[contextId] = context;
        return context;
    }
}
// Default function for creating a new context
function createContext(el) {
    var _a;
    if (webstore().contexts == null) {
        Logger.warn('Creating a context manager because no one else did.');
        webstore().contexts = new ContextManager();
    }
    let contextId = null;
    if (customElements.get(el.tagName.toLowerCase()) != null) {
        contextId = el.tagName;
    }
    else if (customElements.get((_a = el.parentElement) === null || _a === void 0 ? void 0 : _a.tagName.toLowerCase()) != null) {
        // Some frameworks has the parent element registered instead.
        contextId = el.parentElement.tagName;
    }
    else {
        throw 'Element is not defined as a custom element.';
    }
    contextId += '-' + Date.now();
    el.setAttribute('context-id', contextId);
    return webstore().contexts.create(contextId);
}

class Data {
    constructor(uri, type) {
        this.uri = uri;
        if (this.type != null) {
            this.type = type;
        }
    }
    static of(data) {
        return new Data(data.uri, data.type);
    }
}

if (!__webstore__) {
    __webstore__ = { contexts: null, content: null, contentProvider: null };
}
__webstore__.contexts = new ContextManager();
__webstore__.contentProvider = new ContentProviderRegistry();
function webstore$1() { return window.__webstore__; }

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentDidRender() {
    this.context = createContext(this.el);
    this.context.receiver = (data) => {
      console.log('Please load: ', data);
      const client = this.context.getContentResolver().resolve(data.uri);
      client.query().then(result => {
        console.log(result);
      });
    };
  }
  getText() {
    return 'Hello world';
  }
  render() {
    return h("div", null, "Hello, World! I'm ", this.getText());
  }
  get el() { return getElement(this); }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
