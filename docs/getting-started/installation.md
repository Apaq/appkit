# Installation

You can use XenaDS via CDN or by installing it locally.

## CDN Installation (Recommended)

The easiest way to install XenaDS is using the CDN. A lightweight loader will be added to your page that registers components asynchronously as you use them. It's like magic. ✨

Just add the following tags to your page.

```html
<link rel="stylesheet" href="https://ds.xena.biz/dist/xenads/xenads.css" />
<script type="module" src="https://ds.xena.biz/dist/xenads/xenads.esm.js"></script>
```

Now you can [start using XenaDS!](/getting-started/usage.md)

<!--
## Local Installation from NPM

If you don't want to use the CDN, you can install XenaDS locally with the following command.

```bash
npm install @eg-brs/xenads
```

It's up to you to make the source files available to your app. One way to do this is to create a route in your app called `/assets/xenads` that serves static files from `node_modules/@eg-brs/xenads`.

Once you've done that, add the following tags to your page. Make sure to update `href` and `src` so they point to the route you created.

```html
<link rel="stylesheet" href="/assets/xenads/xenads.css" />
<script type="module" src="/assets/xenads/xenads.esm.js"></script>
```
-->

## Local Installation from downloading package

Another way to install locally is by downloading the latest package from https://github.com/eg-brs/Xena.DesignSystem. <!--Extract the contents of the package and as mentioned above it is up to you to make the source files available to you application.-->

Extract the contents of the package. It's up to you to make the source files available to your app. One way to do this is to create a route in your app called `/assets/xenads` that serves static files from `node_modules/@eg-brs/xenads`.

Once you've done that, add the following tags to your page. Make sure to update `href` and `src` so they point to the route you created.

```html
<link rel="stylesheet" href="/assets/xenads/xenads.css" />
<script type="module" src="/assets/xenads/xenads.esm.js"></script>
```
