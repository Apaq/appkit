# Usage

In order to integrate with appkit on your website or web application, you need to get a reference to the appkit object and register App bundles. On this page you will see just how easy it is to get started.

## Appkit Basics

### Showing your first app

There is an app bundle that you can use for getting started. Later on you will learn how to create these bundles yourself. But for now, lets just reference the appkit object, load a bundle and show the first app: "Hello World".

```html preview
<div id="appkit"></div>
<script>
const appkit = Appkit();
const parent = document.getElementById('appkit');
const bundleId = 'appkit'; // Defined in the bundle
const componentId = 'helloworld'; // Defined in the bundle
appkit.load('http://localhost:4000/elements/appkit-elements').then(async() => {
  const app = appkit.resolveAppManagerById('appkit', 'helloworld');
  app.open(parent);
});
</script>
```
