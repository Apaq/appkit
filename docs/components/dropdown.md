# Dropdown

[component-header:xena-dropdown]

Dropdowns expose additional content that "drops down" in a panel.

Dropdowns consist of a trigger and a panel. By default, activating the trigger will expose the panel and interacting outside of the panel will close it.

Dropdowns are designed to work well with [menus](/components/menu.md) to provide a list of options the user can select from. However, dropdowns can also be used in lower-level applications (e.g. [color picker](/components/color-picker.md) and [select](/components/select.md)). The API gives you complete control over showing, hiding, and positioning the panel.

```html preview
<xena-dropdown>
  <xena-button slot="trigger" caret>Dropdown</xena-button>
  <xena-menu>
    <xena-menu-item>Dropdown Item 1</xena-menu-item>
    <xena-menu-item>Dropdown Item 2</xena-menu-item>
    <xena-menu-item>Dropdown Item 3</xena-menu-item>
    <xena-menu-divider></xena-menu-divider>
    <xena-menu-item checked>Checked</xena-menu-item>
    <xena-menu-item disabled>Disabled</xena-menu-item>
    <xena-menu-divider></xena-menu-divider>
    <xena-menu-item>
      Prefix
      <xena-icon slot="prefix" name="gift"></xena-icon>
    </xena-menu-item>
    <xena-menu-item>
      Suffix Icon
      <xena-icon slot="suffix" name="heart"></xena-icon>
    </xena-menu-item>
  </xena-menu>
</xena-dropdown>
```

## Examples

### Placement

The preferred placement of the dropdown can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport.

```html preview
<xena-dropdown placement="top-start">
  <xena-button slot="trigger" caret>Edit</xena-button>
  <xena-menu>
    <xena-menu-item>Cut</xena-menu-item>
    <xena-menu-item>Copy</xena-menu-item>
    <xena-menu-item>Paste</xena-menu-item>
    <xena-menu-divider></xena-menu-divider>
    <xena-menu-item>Find</xena-menu-item>
    <xena-menu-item>Replace</xena-menu-item>
  </xena-menu>
</xena-dropdown>
```

### Distance

The distance from the panel to the trigger can be customized using the `distance` attribute. This value is specified in pixels.

```html preview
<xena-dropdown distance="30">
  <xena-button slot="trigger" caret>Edit</xena-button>
  <xena-menu>
    <xena-menu-item>Cut</xena-menu-item>
    <xena-menu-item>Copy</xena-menu-item>
    <xena-menu-item>Paste</xena-menu-item>
    <xena-menu-divider></xena-menu-divider>
    <xena-menu-item>Find</xena-menu-item>
    <xena-menu-item>Replace</xena-menu-item>
  </xena-menu>
</xena-dropdown>
```

### Skidding

The offset of the panel along the trigger can be customized using the `skidding` attribute. This value is specified in pixels.

```html preview
<xena-dropdown skidding="30">
  <xena-button slot="trigger" caret>Edit</xena-button>
  <xena-menu>
    <xena-menu-item>Cut</xena-menu-item>
    <xena-menu-item>Copy</xena-menu-item>
    <xena-menu-item>Paste</xena-menu-item>
    <xena-menu-divider></xena-menu-divider>
    <xena-menu-item>Find</xena-menu-item>
    <xena-menu-item>Replace</xena-menu-item>
  </xena-menu>
</xena-dropdown>
```

### Hoisting

Dropdown panels will be clipped if they're inside a container that has `overflow: auto|hidden`. The `hoist` attribute forces the panel to use a fixed positioning strategy, allowing it to break out of the container. In this case, the panel will be positioned relative to its containing block, which is usually the viewport unless an ancestor uses a `transform`, `perspective`, or `filter`. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details.

```html preview
<div class="dropdown-hoist">
  <xena-dropdown>
    <xena-button slot="trigger" caret>No Hoist</xena-button>
    <xena-menu>
      <xena-menu-item>Item 1</xena-menu-item>
      <xena-menu-item>Item 2</xena-menu-item>
      <xena-menu-item>Item 3</xena-menu-item>
    </xena-menu>
  </xena-dropdown>

  <xena-dropdown hoist>
    <xena-button slot="trigger" caret>Hoist</xena-button>
    <xena-menu>
      <xena-menu-item>Item 1</xena-menu-item>
      <xena-menu-item>Item 2</xena-menu-item>
      <xena-menu-item>Item 3</xena-menu-item>
    </xena-menu>
  </xena-dropdown>
</div>

<style>
  .dropdown-hoist {
    border: solid 2px var(--xena-panel-border-color);
    padding: var(--xena-spacing-medium);
    overflow: hidden;
  }
</style>
```

### Getting the Selected Item

When dropdowns are used with [menus](/components/menu.md), you can listen for the `xnSelect` event to determine which menu item was selected. The menu item element will be exposed in `event.detail.item`. You can set `value` props to make it easier to identify commands.

```html preview
<div class="dropdown-selection">
  <xena-dropdown>
    <xena-button slot="trigger" caret>Edit</xena-button>
    <xena-menu>
      <xena-menu-item value="cut">Cut</xena-menu-item>
      <xena-menu-item value="copy">Copy</xena-menu-item>
      <xena-menu-item value="paste">Paste</xena-menu-item>
    </xena-menu>
  </xena-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-selection');
  const dropdown = container.querySelector('xena-dropdown');

  dropdown.addEventListener('xnSelect', event => {
    const selectedItem = event.detail.item;
    console.log(selectedItem.value);
  });
</script>
```

Alternatively, you can listen for the `click` event on individual menu items. Note that, using this approach, disabled menu items will still emit a `click` event.

```html preview
<div class="dropdown-selection-alt">
  <xena-dropdown>
    <xena-button slot="trigger" caret>Edit</xena-button>
    <xena-menu>
      <xena-menu-item value="cut">Cut</xena-menu-item>
      <xena-menu-item value="copy">Copy</xena-menu-item>
      <xena-menu-item value="paste">Paste</xena-menu-item>
    </xena-menu>
  </xena-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-selection-alt');
  const cut = container.querySelector('xena-menu-item[value="cut"]');
  const copy = container.querySelector('xena-menu-item[value="copy"]');
  const paste = container.querySelector('xena-menu-item[value="paste"]');

  cut.addEventListener('click', () => console.log('cut'));
  copy.addEventListener('click', () => console.log('copy'));
  paste.addEventListener('click', () => console.log('paste'));
</script>
```

[component-metadata:xena-dropdown]
