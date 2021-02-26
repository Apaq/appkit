import { r as registerInstance, f as createContext, h, g as getElement } from './index.es-4d257e3d.js';

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentDidRender() {
    this.context = createContext(this.el);
    this.context.receiver = (data) => {
      console.log('Please load: ', data);
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
