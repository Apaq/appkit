import { D as Data, L as Logger, C as ContextManager } from './index.es-4d257e3d.js';

class UiComponentManager {
  constructor(instantiator, baseUrl, bundle, id, name, version) {
    this.instantiator = instantiator;
    this.baseUrl = baseUrl;
    this.bundle = bundle;
    this.id = id;
    this.name = name;
    this.version = version;
  }
}

class AppManager extends UiComponentManager {
  constructor(instantiator, baseUrl, bundle, id, name, version) {
    super(instantiator, baseUrl, bundle, id, name, version);
  }
  async open(data) {
    // TODO: Open app in overlay.
    // There should be a way to select the type of overlay: 
    // * Dialog
    // * popover
    // * Full screen modal
    // * Existing element
    // * etc.
    const uiElement = await this.instantiator.instantiate(this.baseUrl, this.bundle, this.id);
    document.body.appendChild(uiElement.nativeElement);
    const context = await uiElement.whenInitialized();
    if (data && context.receiver != null) {
      const dataObj = Data.of(data);
      context.receiver(dataObj);
    }
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
  async whenInitialized() {
    await customElements.whenDefined(this.nativeElement.tagName.toLowerCase());
    return new Promise((resolve, reject) => {
      const start = Date.now();
      const interval = setInterval(() => {
        const id = this.nativeElement.getAttribute('context-id');
        if (id != null) {
          const ctx = __webstore__.contexts.get(id);
          if (ctx != null) {
            Logger.info('Context found');
            this._context = ctx;
            clearInterval(interval);
            resolve(ctx);
            return;
          }
        }
        if (Date.now() - start > 5000) {
          clearInterval(interval);
          reject('Not initialized within timeout period.');
          return;
        }
        // keep on waiting
      }, 10);
    });
  }
  get context() {
    return this._context;
  }
}

class TrustedUiComponentInstantiator {
  constructor(config) {
    Logger.info('woog' + config);
  }
  async instantiate(baseUrl, bundle, id) {
    if (baseUrl != null) {
      await this.insertScript(baseUrl, bundle);
    }
    const el = await this.insertComponent(bundle, id);
    return Promise.resolve(new TrustedUiElement(el));
  }
  insertComponent(bundle, id) {
    const tagName = `${bundle.id}-${id}`;
    const existing = document.getElementsByTagName(tagName);
    const el = existing.length === 0 ? document.createElement(tagName) : existing[0];
    return Promise.resolve(el);
  }
  insertScript(baseUrl, bundle) {
    return new Promise((resolve, reject) => {
      // Do not insert if already inserted
      const scriptId = `bundle-${bundle.id}`;
      if (document.getElementById(scriptId) != null)
        resolve(null);
      const jsFile = bundle.jsFile != null ? bundle.jsFile : 'main.js';
      const cssFile = bundle.cssFile != null ? bundle.cssFile : null;
      const lang = Language.resolveLanguage();
      // Adds script
      let scriptUrl = !bundle.localize ? `${baseUrl}/${jsFile}` : `${baseUrl}/${lang}/${jsFile}`;
      const scriptEl = document.createElement('script');
      document.head.appendChild(scriptEl);
      scriptEl.onerror = (error) => reject(error);
      scriptEl.onload = () => resolve(null);
      // TODO: How to know whether to load as module or not?
      //scriptEl.setAttribute("type", "module");
      scriptEl.setAttribute("src", scriptUrl);
      scriptEl.setAttribute('id', scriptId);
      // Add styles
      if (cssFile != null) {
        const styleUrl = !bundle.localize ? `${baseUrl}/${cssFile}` : `${baseUrl}/${lang}/${cssFile}`;
        const styleEl = document.createElement('link');
        styleEl.setAttribute('rel', 'stylesheet');
        styleEl.setAttribute('type', 'text/css');
        styleEl.setAttribute('href', styleUrl);
        document.head.appendChild(styleEl);
      }
    });
  }
}

class UntrustedUiComponentInstantiator {
  instantiate(baseUrl, bundle, id) {
    throw new Error("Method not implemented." + baseUrl + bundle + id);
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
    this.bundles.push({
      baseUrl: null,
      bundle: {
        id: 'my',
        name: 'My Component',
        components: [
          {
            id: 'component',
            type: 'App'
          }
        ],
      }
    });
  }
  static resolveBundleBaseUrl(defaultServer, bundleId) {
    return bundleId.match(PATTERN_URL) != null ? bundleId : `${defaultServer}/${bundleId}`;
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
            this.bundles.push({ baseUrl, bundle: bundle });
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
        app = this.buildApp(e.baseUrl, e.bundle, e.component);
      }
    });
    return app;
  }
  resolveAppManagersByData(data) {
    let apps = [];
    this.resolveComponentsByType('App').forEach(e => {
      if (this.filterMatches(data, ...e.component.accepts)) {
        apps.push(this.buildApp(e.baseUrl, e.bundle, e.component));
      }
    });
    return apps;
  }
  resolveWidgetManagerById(bundleId, widgetId) {
    let widget = null;
    this.resolveComponentsByType('Widget').forEach(e => {
      if (e.bundle.id === bundleId && e.component.id === widgetId) {
        widget = this.buildWidget(e.baseUrl, e.bundle, e.component);
      }
    });
    return widget;
  }
  resolveWidgetManagersByData(data) {
    let widgets = [];
    this.resolveComponentsByType('App').forEach(e => {
      if (this.filterMatches(data, ...e.component.accepts)) {
        widgets.push(this.buildWidget(e.baseUrl, e.bundle, e.component));
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
  buildApp(baseUrl, bundle, component) {
    const instantiator = this.isTrusted(bundle) ? new TrustedUiComponentInstantiator(this.config) : new UntrustedUiComponentInstantiator();
    const name = typeof component.name === 'string' ? bundle.name : bundle.name[Language.resolveLanguage()];
    return new AppManager(instantiator, baseUrl, bundle, component.id, name, bundle.version);
  }
  buildWidget(baseUrl, bundle, component) {
    const instantiator = this.isTrusted(bundle) ? new TrustedUiComponentInstantiator(this.config) : new UntrustedUiComponentInstantiator();
    const name = typeof component.name === 'string' ? bundle.name : bundle.name[Language.resolveLanguage()];
    return new WidgetManager(instantiator, baseUrl, bundle, component.id, name, bundle.version);
  }
  /*
      private buildExtension(bundle: IBundle, component: IComponent): Extension {
          // TODO: Figure out how to handle extensions
          if (bundle || component) return null;
          return null;
      }
  */
  resolveComponentsByType(type) {
    const components = [];
    this.bundles.forEach(entry => {
      entry.bundle.components.forEach(component => {
        if (component.type === type) {
          components.push({ baseUrl: entry.baseUrl, bundle: entry.bundle, component });
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
}

if (!__webstore__) {
  __webstore__ = { bundles: null, contexts: null, content: null };
}
__webstore__.bundles = new BundleManager();
__webstore__.contexts = new ContextManager();
const globalFn = () => { };

const globalScripts = globalFn;

export { globalScripts as g };
