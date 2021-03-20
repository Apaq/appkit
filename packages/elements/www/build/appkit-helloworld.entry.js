import { r as registerInstance, h, g as getElement } from './index-f3e33d6a.js';

const helloworldCss = ":host{display:block}";

const HelloWorld = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.text = 'Hello World!';
  }
  componentDidRender() {
    this.context = createAppContext(this.el);
    this.context.receiver = (data) => this.onData(data);
  }
  onData(data) {
    // Data received. Get content client.
    const client = this.context.getContentResolver().resolve(data.uri);
    // Load data from client
    client.query().then(result => {
      console.log(result);
      this.text += ' I Just loaded some data';
    });
  }
  render() {
    return h("div", null, this.text);
  }
  get el() { return getElement(this); }
};
HelloWorld.style = helloworldCss;

export { HelloWorld as appkit_helloworld };
