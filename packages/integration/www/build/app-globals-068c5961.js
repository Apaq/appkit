class Data {
  constructor(uri, type) {
    this.uri = uri;
    if (this.type != null) {
      this.type = type;
    }
    else {
      // Try to resolve type from:
      // 1: File suffix (.pdf, .jpg etc.)
      // 2: If scheme is http(s)://, then do an options request to get the type
      // 3: If scheme is content:// then resolve from content type registry
    }
  }
  static of(data) {
    return new Data(data.uri, data.type);
  }
}

class App {
  resolveElement() {
    if (this._element != null) {
      return this._element;
    }
    const tagName = `${this.bundleId}-${this.id}`;
    const el = document.createElement(tagName);
    this._element = el;
    return el;
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
    const el = this.resolveElement();
    document.body.appendChild(el);
    return Promise.resolve(el);
  }
}

class Widget {
  async insert(parentElement, data) {
    // TODO: We should have support for inserting into an element
    if (parentElement || data)
      return null;
    return null;
  }
}

class Webstore {
  constructor() {
    this.defaultServer = 'https://apaq.github.io/webstore';
    this.bundles = [];
  }
  getLanguage() {
    return 'en';
  }
  buildApp(bundle, component) {
    const app = new App();
    app.id = component.id;
    app.bundleId = bundle.id;
    if (typeof component.name === 'string') {
      app.name = bundle.name;
    }
    else {
      app.name = bundle.name[this.getLanguage()];
    }
    return app;
  }
  buildWidget(bundle, component) {
    const widget = new Widget();
    widget.id = component.id;
    widget.bundleId = bundle.id;
    if (typeof component.name === 'string') {
      widget.name = bundle.name;
    }
    else {
      widget.name = bundle.name[0];
    }
    return widget;
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
  async loadBundles(...bundleIds) {
    console.log('loading: ', bundleIds);
    const promises = [];
    for (const bundleId of bundleIds) {
      const baseUrl = bundleId.match(/(http|https):\/\/.*/) != null ? bundleId : `${this.defaultServer}/${bundleId}`;
      const url = `${baseUrl}/manifest.json`;
      const p = fetch(url).then(response => {
        if (response.status === 200) {
          return response.json().then((bundle) => {
            // TODO: Should be able to isolate component in iframe
            const jsFile = bundle.jsFile != null ? bundle.jsFile : 'main.js';
            const cssFile = bundle.cssFile != null ? bundle.cssFile : null;
            const lang = this.getLanguage();
            // Adds script
            let scriptUrl = !bundle.localize ? `${baseUrl}/${jsFile}` : `${baseUrl}/${lang}/${jsFile}`;
            const scriptEl = document.createElement('script');
            //scriptEl.setAttribute("type", "module");
            scriptEl.setAttribute("src", scriptUrl);
            document.head.appendChild(scriptEl);
            // Add styles
            if (cssFile != null) {
              const styleUrl = !bundle.localize ? `${baseUrl}/${jsFile}` : `${baseUrl}/${lang}/${jsFile}`;
              const styleEl = document.createElement('link');
              styleEl.setAttribute('rel', 'stylesheet');
              styleEl.setAttribute('type', 'text/css');
              styleEl.setAttribute('href', styleUrl);
              document.head.appendChild(styleEl);
              // <link rel="stylesheet" type="text/css" href="mystyle.css">
            }
            this.bundles.push(bundle);
          });
        }
      });
      promises.push(p);
    }
    return Promise.all(promises);
  }
  resolveAppById(bundleId, appId) {
    let app = null;
    this.resolveComponentsByType('App').forEach(e => {
      if (e.bundle.id === bundleId && e.component.id === appId) {
        app = this.buildApp(e.bundle, e.component);
      }
    });
    return app;
  }
  resolveAppsByData(data) {
    let apps = [];
    this.resolveComponentsByType('App').forEach(e => {
      if (this.filterMatches(data, ...e.component.accepts)) {
        apps.push(this.buildApp(e.bundle, e.component));
      }
    });
    return apps;
  }
  resolveWidgetById(bundleId, widgetId) {
    let widget = null;
    this.resolveComponentsByType('Widget').forEach(e => {
      if (e.bundle.id === bundleId && e.component.id === widgetId) {
        widget = this.buildWidget(e.bundle, e.component);
      }
    });
    return widget;
  }
  resolveWidgetsByData(data) {
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

window.webstore = new Webstore();
const globalFn = () => { };

const globalScripts = globalFn;

export { globalScripts as g };
