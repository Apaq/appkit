# Menu Item

[component-header:xena-menu-item]

Menu items provide options for the user to pick from in a menu.

```html preview
<xena-menu
  style="max-width: 200px; border: solid 1px var(--xena-panel-border-color); border-radius: var(--xena-border-radius-medium);"
>
  <xena-menu-item>Option 1</xena-menu-item>
  <xena-menu-item>Option 2</xena-menu-item>
  <xena-menu-item>Option 3</xena-menu-item>
  <xena-menu-divider></xena-menu-divider>
  <xena-menu-item checked>Checked</xena-menu-item>
  <xena-menu-item disabled>Disabled</xena-menu-item>
  <xena-menu-divider></xena-menu-divider>
  <xena-menu-item>
    Prefix Icon
    <xena-icon slot="prefix" name="gift"></xena-icon>
  </xena-menu-item>
  <xena-menu-item>
    Suffix Icon
    <xena-icon slot="suffix" name="heart"></xena-icon>
  </xena-menu-item>
</xena-menu>
```

[component-metadata:xena-menu-item]
