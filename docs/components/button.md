# Button

[component-header:xena-button]

Buttons represent actions that are available to the user.

```html preview
<xena-button>Button</xena-button>
```

## Examples

### Types

Use the `type` attribute to set the button's type.

```html preview
<xena-button type="default">Default</xena-button>
<xena-button type="primary">Primary</xena-button>
<xena-button type="success">Success</xena-button>
<xena-button type="info">Info</xena-button>
<xena-button type="warning">Warning</xena-button>
<xena-button type="danger">Danger</xena-button>
<xena-button type="link">Link</xena-button>
```

### Sizes

Use the `size` prop to change a button's size.

```html preview
<xena-button size="small">Small</xena-button>
<xena-button size="medium">Medium</xena-button>
<xena-button size="large">Large</xena-button>
```

### Link Buttons

It's often helpful to have a button that works like a link. This is possible by setting the `href` attribute, which will make the component render an `<a>` under the hood. This gives you all the default link behavior the browser provides (e.g. <kbd>CMD/CTRL/SHIFT + CLICK</kbd>) and exposes the `target` and `download` attributes.

```html preview
<xena-button href="https://example.com/">Link</xena-button>
<xena-button href="https://example.com/" target="_blank">New Window</xena-button>
<xena-button href="/assets/images/logo.png" download="xena.png">Download</xena-button>
<xena-button href="https://example.com/" disabled>Disabled</xena-button>
```

?> When a `target` is set, the link will receive `rel="noreferrer noopener"` for [security reasons](https://mathiasbynens.github.io/rel-noopener/).

<!--
### Setting a Custom Width

As expected, buttons can be given a custom width by setting its `width`. This is useful for making buttons span the full width of their container on smaller screens.

```html preview
<xena-button
  type="default"
  size="small"
  style="width: 100%; margin-bottom: 1rem;"
  >Small</xena-button
>
<xena-button
  type="default"
  size="medium"
  style="width: 100%; margin-bottom: 1rem;"
  >Medium</xena-button
>
<xena-button type="default" size="large" style="width: 100%;"
  >Large</xena-button
>
```
-->

### Prefix and Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html preview
<xena-button type="default">
  <i slot="prefix" class="fas fa-cog"></i>
  Settings
</xena-button>

<xena-button type="default">
  <i slot="suffix" class="fas fa-redo"></i>
  Refresh
</xena-button>

<xena-button type="default">
  <i slot="prefix" class="fas fa-link"></i>
  <i slot="suffix" class="fas fa-external-link-square-alt"></i>
  Open
</xena-button>
```

### Disabled

Use the `disabled` prop to disable a button. Clicks will be suppressed until the disabled state is removed.

```html preview
<xena-button type="default" disabled>Default</xena-button>
<xena-button type="primary" disabled>Primary</xena-button>
<xena-button type="success" disabled>Success</xena-button>
<xena-button type="info" disabled>Info</xena-button>
<xena-button type="warning" disabled>Warning</xena-button>
<xena-button type="danger" disabled>Danger</xena-button>
```

[component-metadata:xena-button]
