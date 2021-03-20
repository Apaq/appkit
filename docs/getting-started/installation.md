# Installation

You can use Appkit via CDN or by installing it locally.

## CDN Installation (Recommended)

The easiest way to install Appkit is using the CDN. A lightweight loader will be added to your page that registers components asynchronously as you use them. It's like magic. ✨

Just add the following tags to your page.

```html
<link rel="stylesheet" href="https://appkit.store/dist/Appkit/Appkit.css" />
<script type="module" src="https://appkit.store/dist/Appkit/Appkit.esm.js"></script>
```

Now you can [start using Appkit!](/getting-started/usage.md)

<!--
## Local Installation from NPM

If you don't want to use the CDN, you can install Appkit locally with the following command.

```bash
npm install @appkit/core
```

It's up to you to make the source files available to your app. One way to do this is to create a route in your app called `/assets/Appkit` that serves static files from `node_modules/@appkit/core`.

Once you've done that, add the following tags to your page. Make sure to update `href` and `src` so they point to the route you created.

```html
<link rel="stylesheet" href="/assets/Appkit/Appkit.css" />
<script type="module" src="/assets/Appkit/Appkit.esm.js"></script>
```
-->

## Local Installation from downloading package

Another way to install locally is by downloading the latest package from https://github.com/apaq/appkit. <!--Extract the contents of the package and as mentioned above it is up to you to make the source files available to you application.-->

Extract the contents of the package. It's up to you to make the source files available to your app. One way to do this is to create a route in your app called `/assets/Appkit` that serves static files from `node_modules/@appkit/core`.

Once you've done that, add the following tags to your page. Make sure to update `href` and `src` so they point to the route you created.

```html
<link rel="stylesheet" href="/assets/Appkit/Appkit.css" />
<script type="module" src="/assets/Appkit/Appkit.esm.js"></script>
```
