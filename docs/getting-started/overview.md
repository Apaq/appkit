<div class="splash">
  <div class="splash-start">
    <img class="splash-logo" src="/assets/images/logo.png" alt="Xena Design System">
    <p><strong>A forward-thinking library of web components for Xena.</strong></p>
    <ul>
      <li>Works with all frameworks 🧩</li>
      <li>Fully customizable with CSS 🎨</li>
      <li>Built with accessibility in mind ♿️</li>
    </ul>
    <p>Designed by <a href="https://twitter.com/XenaBizDK" rel="noopener" target="_blank">Xena</a>.</p>
  </div>
  <div class="splash-end">
    <img class="splash-image" src="/assets/images/undraw-content-team.svg" alt="Cartoon of people assembling components while standing on a giant laptop.">
  </div>
</div>

## Quick Start

Add the following code to your page.

```html
<link rel="stylesheet" href="https://ds.xena.biz/dist/xenads/xenads.css" />
<script type="module" src="https://ds.xena.biz/dist/xenads/xenads.esm.js"></script>
```

Now you have access to all of Xena's components! Try adding a button:

```html
<xena-button>Click me</xena-button>
```

See the [installation instructions](getting-started/installation.md) for more details and other ways to install Xena.

## New to Web Components?

**TL;DR** – we finally have a way to create [our own HTML elements](https://html.spec.whatwg.org/multipage/custom-elements.html) and use them in any framework we want!

Thanks to the popularity of frameworks such as Angular, Vue, and React, component-driven development has become a part of our every day lives. Components help us encapsulate styles and behaviors into reusable building blocks. They make a lot of sense in terms of design, development, and testing.

Unfortunately, _framework-specific_ components fail us in a number of ways:

- You can only use them in the framework they're designed for 🔒
- Their lifespan is limited to that of the framework's ⏳
- New frameworks/versions can lead to breaking changes, requiring substantial effort to update components 😭

Web components solve these problems. They're [supported by all modern browsers](https://caniuse.com/#feat=custom-elementsv1), they're framework-agnostic, and they're [part of the standard](https://developer.mozilla.org/en-US/docs/Web/Web_Components), so we know they'll be supported for many years to come.

This is the technology that XenaDS is built on.

## What Problem Does This Solve?

XenaDS provides a collection of professionally designed, every day UI components built on a framework-agnostic technology. Why make a component library that only works with one framework?

With XenaDS, you can:

- Start building things faster (no need to roll your own buttons)
- Build multiple apps with different frameworks that all share the same UI

All the foundational components you need are right here. And since it's built on web standards, browsers will continue to support it for many years to come.

## Browser Support

XenaDS is tested in the latest two versions of the following browsers.

<img src="/assets/images/chrome.png" alt="Chrome" width="64" height="64">
<img src="/assets/images/edge.png" alt="Edge" width="64" height="64">
<img src="/assets/images/firefox.png" alt="Firefox" width="64" height="64">
<img src="/assets/images/opera.png" alt="Opera" width="64" height="64">
<img src="/assets/images/safari.png" alt="Safari" width="64" height="64">

Critical bug fixes in earlier versions will be addressed based on their severity and impact.

If you need to support IE11 or pre-Chromium Edge, this library isn't for you. Although web components can (to some degree) be polyfilled for legacy browsers, supporting them is outside the scope of this project. If you're using XenaDS in such a browser, you're gonna have a bad time. ⛷

<!--
## License

XenaDS is designed by [Xena](https://twitter.com/XenaBizDK). It's available under the terms of the MIT license.
-->

## Attribution

Special thanks to the following projects and individuals that helped make XenaDS possible.

- Components are compiled by [Stencil](https://stenciljs.com/)
- Documentation is powered by [Docsify](https://docsify.js.org/)

If you're new to this project, please see the [installation instructions](/getting-started/installation.md).
