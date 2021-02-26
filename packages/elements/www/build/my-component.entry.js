import { r as registerInstance, g as createContext, h, i as getElement } from './index.es-90f5fc74.js';

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
