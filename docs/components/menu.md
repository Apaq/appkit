# Menu

[component-header:xena-menu]

Menus provide a list of options for the user to choose from.

Use [menu items](/components/menu-item.md), [menu dividers](/components/menu-divider.md), and [menu labels](/components/menu-label.md) to compose a menu.

```html preview
<xena-menu
  style="max-width: 200px; border: solid 1px var(--xena-panel-border-color); border-radius: var(--xena-border-radius-medium);"
>
  <xena-menu-item value="undo">Undo</xena-menu-item>
  <xena-menu-item value="redo">Redo</xena-menu-item>
  <xena-menu-divider></xena-menu-divider>
  <xena-menu-item value="cut">Cut</xena-menu-item>
  <xena-menu-item value="copy">Copy</xena-menu-item>
  <xena-menu-item value="paste">Paste</xena-menu-item>
  <xena-menu-item value="delete">Delete</xena-menu-item>
</xena-menu>
```

Set a specific max-height to add scroll to the menu when containing a lot of elements.

```html preview
<xena-menu
  id="menu-2"
  style="max-width: 200px;max-height: 300px; overflow-y:auto; border: solid 1px var(--xena-panel-border-color); border-radius: var(--xena-border-radius-medium);"
>
  <xena-menu-item value="undo">Undo</xena-menu-item>
  <xena-menu-item value="undo">Undo</xena-menu-item>
  <xena-menu-item value="undo">Undo</xena-menu-item>
  <xena-menu-item value="undo">Undo</xena-menu-item>
  <xena-menu-item value="undo">Undo</xena-menu-item>
  <xena-menu-item value="undo">Undo</xena-menu-item>
  <xena-menu-item value="undo">Undo</xena-menu-item>
  <xena-menu-item value="undo">Undo</xena-menu-item>
  <xena-menu-item value="undo">Undo</xena-menu-item>
  <xena-menu-item value="undo">Undo</xena-menu-item>
  <xena-menu-item value="undo">Undo</xena-menu-item>
  <xena-menu-item value="undo">Undo</xena-menu-item>
  <xena-menu-item value="undo">Undo</xena-menu-item>
  <xena-menu-item value="undo">Undo</xena-menu-item>
  <xena-menu-item value="undo">Undo</xena-menu-item>
  <xena-menu-item value="undo">Undo</xena-menu-item>
  <xena-menu-item value="undo">Undo</xena-menu-item>
  <xena-menu-item value="undo">Undo</xena-menu-item>
  <xena-menu-item value="undo">Undo</xena-menu-item>
  <xena-menu-item value="undo">Undo</xena-menu-item>
  <xena-menu-item value="undo">Undo</xena-menu-item>
  <xena-menu-item value="undo">Undo</xena-menu-item>
  <xena-menu-item value="undo">Undo</xena-menu-item>
  <xena-menu-item value="undo">Undo</xena-menu-item>
  <xena-menu-item value="undo">Undo</xena-menu-item>
  <xena-menu-item value="undo">Undo</xena-menu-item>
  <xena-menu-item value="undo">Undo</xena-menu-item>
  <xena-menu-item value="undo">Undo</xena-menu-item>
  <xena-menu-item value="undo">Undo</xena-menu-item>
  <xena-menu-item value="undo">Undo</xena-menu-item>
</xena-menu>

<script>
  const menu = document.querySelector('#menu-2');
  menu.setFocus();
</script>
```

[component-metadata:xena-menu]
