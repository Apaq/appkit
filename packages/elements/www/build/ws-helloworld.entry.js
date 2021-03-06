import { r as registerInstance, h, g as getElement } from './index-3c0c31c0.js';

const helloworldCss = ":host{display:block}";

const HelloWorld = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.text = 'Hello World!';
  }
  componentDidRender() {
    console.log('rendered');
    this.context = createAppContext(this.el);
    this.context.receiver = (data) => {
      console.log('Please load: ', data);
      const client = this.context.getContentResolver().resolve(data.uri);
      client.query().then(result => {
        console.log(result);
        this.text += ' I Just loaded some data';
      });
    };
  }
  render() {
    return h("div", null, this.text);
  }
  get el() { return getElement(this); }
};
HelloWorld.style = helloworldCss;

export { HelloWorld as ws_helloworld };
