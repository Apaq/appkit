# Usage

In order to integrate with webstore on your website or web application, you need to get a reference to the webstore object and register App bundles. On this page you will see just how easy it is to get started.

## Webstore Basics

### Showing your first app

Webstore comes with a few pre-bundled apps that you can use for getting started. Later on you will learn how to load bundles. For now, lets just reference the webstore object and show the first app: "Hello World".

```html preview
<div id="webstore"></div>
<script>
const webstore = Webstore();
const parent = document.getElementById('webstore');
webstore.load('http://localhost:4000/elements/webstore-elements').then(async() => {
  const app = webstore.resolveAppManagerById('ws', 'helloworld');
  app.open(parent);
});
</script>
```
