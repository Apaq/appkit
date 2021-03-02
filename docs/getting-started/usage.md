# Usage

XenaDS components are just regular HTML elements, or "custom elements" to be precise. You can use them like any other element. Each component has detailed documentation that describes its full API, including properties, events, methods, and more.

## Web Component Basics

### Properties

Many components have properties ("props") that can be set using attributes. For example, buttons accept a `size` attribute that dictates the button's size.

```html
<xena-button size="small">Click me</xena-button>
```

Some props are booleans, so they only have true/false values. To activate a boolean prop, add the corresponding attribute without a value.

```html
<xena-button disabled>Click me</xena-button>
```

<!--
In rare cases, a prop may require an array, an object, or a function. For example, to customize the color picker's list of preset swatches, you set the `swatches` prop to an array of colors. This can be done with JavaScript.

```html
<xena-color-picker></xena-color-picker>

<script>
  const colorPicker = document.querySelector('xena-color-picker');
  colorPicker.swatches = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
</script>
```

Refer to a component's documentation for a complete list of its properties.
-->

### Events

You can listen for standard events such as `click`, `mouseover`, etc. as you normally would. In addition, some components emit custom events. These work the same way as standard events, but are prefixed with `xn` to prevent collisions with standard events and other libraries.

```html
<xena-button>Check me</xena-button>

<script>
  const checkbox = document.querySelector('xena-alert');
  checkbox.addEventListener('xnFocus', event => {
    console.log('focused');
  });
</script>
```

Refer to a component's documentation for a complete list of its custom events.

### Methods

Some components have methods you can call to trigger various behaviors. For example, you can set focus on a XenaDS input using the `setFocus()` method.

```html
<xena-alert></xena-alert>

<script>
  const input = document.querySelector('xena-alert');
  input.setClosed(false);
</script>
```

Refer to a component's documentation for a complete list of its methods and their arguments.

### Slots

Many components use slots to accept content inside of them. The most common slot is the _default_ slot, which includes any content inside the component that doesn't have a `slot` attribute.

For example, a button's default slot is used to populate its label.

```html
<xena-button>Click me</xena-button>
```

Some components also have _named_ slots. A named slot can be populated by adding a child element with the appropriate `slot` attribute. Notice how the icon below has the `slot="prefix"` attribute? This tells the component to place the icon into its `prefix` slot.

```html
<xena-alert>
  <i slot="prefix" class="fas fa-gear"></i>
  Settings
</xena-alert>
```

The location of a named slot doesn't matter. You can put it anywhere inside the component and the browser will move it to the right place automatically!

Refer to a component's documentation for a complete list of available slots.

### Don't Use Self-closing Tags

Custom elements cannot have self-closing tags. Similar to `<script>` and `<textarea>`, you must always include the full closing tag.

```html
<!-- Don't do this -->
<xena-alert />

<!-- Always do this -->
<xena-alert></xena-alert>
```

### Differences from Native Elements

You might expect similarly named elements to share the same API as native HTML elements. This is not always the case. XenaDS components **are not** designed to be one-to-one replacements for their HTML counterparts.

For example, `<button>` and `<xena-button>` both have a `type` attribute, but it does different things (the former controls whether the button submits a form and the latter controls the button's appearance). There are technical reasons for some of these design decisions that are outside the scope of this page.

?> **Don't make assumptions about a component's API!** To prevent unexpected behaviors, please take the time to review the documentation and make sure you understand what each property, method, and event is intended to do.

## Code Completion

XenaDS ships with a `custom-elements.json` file that can be used to describe its components to supportive editors, providing code completion (also known as "code hinting" or "IntelliSense"). To enable this, you need to tell your editor where this file is.

### VS Code

1. [Install XenaDS locally](/getting-started/installation.md#local-installation)
2. Create a folder called `.vscode` at the root of your project
3. Create a file inside the folder called `settings.json`
4. Add the following to the file

```js
{
  "html.customData": ["./node_modules/@eg-brs/xenads/dist/custom-elements.json"]
}
```

If `settings.json` already exists in your project, simply add the `html.customData` line to the root of the object.

## React

React [doesn't play nice](https://custom-elements-everywhere.com/#react) with custom elements — it's a bit finicky about props.

> React passes all data to Custom Elements in the form of HTML attributes. For primitive data this is fine, but the system breaks down when passing rich data, like objects or arrays. In these instances you end up with stringified values like `some-attr="[object Object]"` which can't actually be used.

Event handling can also be cumbersome.

> Because React implements its own synthetic event system, it cannot listen for DOM events coming from Custom Elements without the use of a workaround. Developers will need to reference their Custom Elements using a ref and manually attach event listeners with addEventListener. This makes working with Custom Elements cumbersome.

Fortunately, there's a utility that will wrap XenaDS components so you can use them as if they were React components. 👇

?> If you're starting a new project, consider using [Preact](https://preactjs.com/) as an alternative. It shares the same API as React and [handles custom elements quite well](https://custom-elements-everywhere.com/#preact).

<!--
### Wrapping Components

You can use [this utility](https://www.npmjs.com/package/@eg-brs/xeands-react-wrapper) to wrap XenaDS components so they work like like regular React components. To install it, use this command.

```bash
npm install @eg-brs/xenads-react-wrapper
```

Now you can "import" XenaDS components as React components! Remember to [install XenaDS](/getting-started/installation.md) first, otherwise this won't work.

```js
import wrapCustomElement from '@eg-brs/xenads-react-wrapper';

const XenaDSButton = wrapCustomElement('xena-button');

return <XenaDSButton type="primary">Click me</XenaDSButton>;
```

A reference ("ref") to the underlying custom element is exposed through the `element` property so you can access it directly. This is useful for calling methods.

```jsx
<XenaDSButton
  ref={el => this.button = el}
  onClick={() => this.button.element.current.removeFocus()}
>
  Click me
</XenaDSButton>
```
-->

## Vue

Vue [plays nice](https://custom-elements-everywhere.com/#vue) with custom elements. You just have to tell it to ignore XenaDS components. This is pretty easy because they all start with `xena-`.

```js
Vue.config.ignoredElements = [/^xena-/];

new Vue({ ... });
```

<!--
### Binding Complex Data

When binding complex data such as objects and arrays, use the `.prop` modifier to make Vue bind them as a property instead of an attribute.

```html
<xena-color-picker :swatches.prop="mySwatches" />
```
-->

<!--
### Two-way Binding

One caveat is there's currently [no support for v-model on custom elements](https://github.com/vuejs/vue/issues/7830), but you can still achieve two-way binding manually.

```html
<!-- This doesn't work ->
<xena-input v-model="name">

<!-- This works, but it's a bit longer ->
<xena-input :value="name" @input="name = $event.target.value">
```

If that's too verbose, you can use a custom directive instead. 👇
-->

<!--
### Using a Custom Directive

You can use [this utility](https://www.npmjs.com/package/@eg-brs/xenads-vue-model) to add a custom directive to Vue that will work just like `v-model` but for XenaDS components. To install it, use this command.

```bash
npm install @eg-brs/xenads-vue-model
```

Next, import the directive and enable it like this.

```js
import XenaDSModelDirective from '@eg-brs/xenads-vue-model';

Vue.config.ignoredElements = [/^xena-/];
Vue.use(XenaDSModelDirective);

// Your init here
new Vue({ ... });
```

Now you can use the `v-xena-model` directive to keep your data in sync!

```html
<xena-input v-xena-model="name">
```
-->

## Angular

Angular [plays nice](https://custom-elements-everywhere.com/#angular) with custom elements. Just make sure to apply the custom elements schema as shown below.

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
```
