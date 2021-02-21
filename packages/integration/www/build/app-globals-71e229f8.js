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
Logger.enabled = false;

class ContentProviderRegistry {
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

class ContentResolver {
    constructor() {
        this.contentProviderRegistry = new ContentProviderRegistry();
    }
    resolve(uri) {
        if (uri)
            return null;
        let uriObj;
        if (typeof uri === 'string') {
            uriObj = new URL(uri);
        }
        else {
            uriObj = uri;
        }
        const authority = uriObj.host;
        const provider = this.contentProviderRegistry.get(authority);
        return new ContentProviderClient(provider);
    }
}

class ContextImpl {
    constructor(contentResolver) {
        this.contentResolver = contentResolver;
        this._receivers = [];
    }
    getContentResolver() {
        return this.contentResolver;
    }
    registerReceiver(receiver) {
        this._receivers.push(receiver);
    }
}

if (window.__webstore__ == null) {
    window.__webstore__ = { contexts: null, content: new ContentResolver() };
}
class ContextManager {
    // Create a new context.
    createContext(key) {
        Logger.warn(`Creating context: ${key}`);
        const context = new ContextImpl(window.__webstore__.content);
        this._contexts[key] = context;
        return context;
    }
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

class UiComponentManager {
  constructor(instantiator, bundle, id, name, version) {
    this.instantiator = instantiator;
    this.bundle = bundle;
    this.id = id;
    this.name = name;
    this.version = version;
  }
}

class AppManager extends UiComponentManager {
  constructor(instantiator, bundle, id, name, version) {
    super(instantiator, bundle, id, name, version);
  }
  async open(data) {
    // TODO: Open app in overlay.
    // There should be a way to select the type of overlay: 
    // * Dialog
    // * popover
    // * Full screen modal
    // * Existing element
    // * etc.
    if (data) {
      const dataObj = Data.of(data);
      if (data || dataObj)
        return null;
    }
    // TODO: Move instantiation to instantiator
    const uiElement = this.instantiator.instantiate(this.bundle, this.id);
    return Promise.resolve(uiElement);
  }
}

class WidgetManager extends UiComponentManager {
  async instantiate(parentElement, data) {
    // TODO: We should have support for inserting into an element
    if (parentElement || data)
      return null;
    return null;
  }
}

class Language {
  static resolveLanguage() {
    return 'en';
  }
}

class TrustedUiElement {
  constructor(nativeElement) {
    this.nativeElement = nativeElement;
  }
}

class TrustedUiComponentInstantiator {
  constructor(config) {
    this.config = config;
  }
  instantiate(bundle, id) {
    this.insertScript(bundle);
    const el = this.resolveElement(bundle, id);
    document.body.appendChild(el);
    return new TrustedUiElement(el);
  }
  resolveElement(bundle, id) {
    const tagName = `${bundle.id}-${id}`;
    const el = document.createElement(tagName);
    return el;
  }
  insertScript(bundle) {
    // TODO Check if script was already inserted
    const baseUrl = BundleManager.resolveBundleBaseUrl(this.config.defaultRepository, bundle.id);
    const jsFile = bundle.jsFile != null ? bundle.jsFile : 'main.js';
    const cssFile = bundle.cssFile != null ? bundle.cssFile : null;
    const lang = Language.resolveLanguage();
    // Adds script
    let scriptUrl = !bundle.localize ? `${baseUrl}/${jsFile}` : `${baseUrl}/${lang}/${jsFile}`;
    const scriptEl = document.createElement('script');
    //scriptEl.setAttribute("type", "module");
    scriptEl.setAttribute("src", scriptUrl);
    document.head.appendChild(scriptEl);
    // Add styles
    if (cssFile != null) {
      const styleUrl = !bundle.localize ? `${baseUrl}/${cssFile}` : `${baseUrl}/${lang}/${cssFile}`;
      const styleEl = document.createElement('link');
      styleEl.setAttribute('rel', 'stylesheet');
      styleEl.setAttribute('type', 'text/css');
      styleEl.setAttribute('href', styleUrl);
      document.head.appendChild(styleEl);
    }
  }
}

class UntrustedUiComponentInstantiator {
  instantiate(bundle, id) {
    throw new Error("Method not implemented." + bundle + id);
  }
}

const PATTERN_URL = /(http|https):\/\/.*/;
class BundleManager {
  constructor() {
    this.config = {
      defaultRepository: 'https://apaq.github.io/webstore',
      trustedRepositories: []
    };
    this.bundles = [];
  }
  isTrusted(bundle) {
    if (bundle.id.match(PATTERN_URL) == null) {
      // If loaded from default, then it is trusted.
      return true;
    }
    for (let repo of this.config.trustedRepositories) {
      // If bundle points to a trusted repo, then it is trusted.
      if (bundle.id.startsWith(repo)) {
        return true;
      }
    }
    return false;
  }
  buildApp(bundle, component) {
    const instantiator = this.isTrusted(bundle) ? new TrustedUiComponentInstantiator(this.config) : new UntrustedUiComponentInstantiator();
    const name = typeof component.name === 'string' ? bundle.name : bundle.name[Language.resolveLanguage()];
    return new AppManager(instantiator, bundle, component.id, name, bundle.version);
  }
  buildWidget(bundle, component) {
    const instantiator = this.isTrusted(bundle) ? new TrustedUiComponentInstantiator(this.config) : new UntrustedUiComponentInstantiator();
    const name = typeof component.name === 'string' ? bundle.name : bundle.name[Language.resolveLanguage()];
    return new WidgetManager(instantiator, bundle, component.id, name, bundle.version);
  }
  /*
      private buildExtension(bundle: IBundle, component: IComponent): Extension {
          // TODO: Figure out how to handle extensions
          if (bundle || component) return null;
          return null;
      }
  */
  static resolveBundleBaseUrl(defaultServer, bundleId) {
    return bundleId.match(PATTERN_URL) != null ? bundleId : `${defaultServer}/${bundleId}`;
  }
  resolveComponentsByType(type) {
    const components = [];
    this.bundles.forEach(bundle => {
      bundle.components.forEach(component => {
        if (component.type === type) {
          components.push({ bundle, component });
        }
      });
    });
    return components;
  }
  filterMatches(data, ...filter) {
    // TODO: Handle filter
    if (filter || data)
      return true;
    return true;
  }
  async load(...bundleIds) {
    console.log('loading: ', bundleIds);
    const promises = [];
    for (const bundleId of bundleIds) {
      const baseUrl = BundleManager.resolveBundleBaseUrl(this.config.defaultRepository, bundleId);
      const url = `${baseUrl}/manifest.json`;
      const p = fetch(url).then(response => {
        if (response.status === 200) {
          return response.json().then((bundle) => {
            this.bundles.push(bundle);
          });
        }
      });
      promises.push(p);
    }
    return Promise.all(promises);
  }
  resolveAppManagerById(bundleId, appId) {
    let app = null;
    this.resolveComponentsByType('App').forEach(e => {
      if (e.bundle.id === bundleId && e.component.id === appId) {
        app = this.buildApp(e.bundle, e.component);
      }
    });
    return app;
  }
  resolveAppManagersByData(data) {
    let apps = [];
    this.resolveComponentsByType('App').forEach(e => {
      if (this.filterMatches(data, ...e.component.accepts)) {
        apps.push(this.buildApp(e.bundle, e.component));
      }
    });
    return apps;
  }
  resolveWidgetManagerById(bundleId, widgetId) {
    let widget = null;
    this.resolveComponentsByType('Widget').forEach(e => {
      if (e.bundle.id === bundleId && e.component.id === widgetId) {
        widget = this.buildWidget(e.bundle, e.component);
      }
    });
    return widget;
  }
  resolveWidgetManagersByData(data) {
    let widgets = [];
    this.resolveComponentsByType('App').forEach(e => {
      if (this.filterMatches(data, ...e.component.accepts)) {
        widgets.push(this.buildWidget(e.bundle, e.component));
      }
    });
    return widgets;
  }
  resolveExtensionsByData(data) {
    // TODO: Figure out how to handle extensions
    if (data)
      return null;
    return null;
  }
}

debugger;
if (!__webstore__) {
  __webstore__ = { bundles: null, contexts: null };
}
__webstore__.bundles = new BundleManager();
__webstore__.contexts = new ContextManager();
const globalFn = () => { };

const globalScripts = globalFn;

export { globalScripts as g };
