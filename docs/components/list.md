# Combobox

[component-header:xena-list]

A List is a component aimed at being used as the list of entries shown in a selectbox, autocomplete etc.

It consists of an [menu](/components/menu.md) and [menu items](/components/menu-item.md) that can be exposed in a [dropdown](/components/dropdown.md) for example.

List is a lowlevel combination of a menu and menu-item's. It does not contain data state of any kind. It only delivers the UI and events for it. As so its main usage is in other components that supply the logic needed for this type of component (eg. [autocomplete](/components/autocomplete.md))

```html preview
<xena-list style="border:1px solid #dfdfdf;"></xena-list>

<script>
  const list = document.querySelector('xena-list');

  list.entries = [
    { id: '1', label: 'label 1' },
    { id: '2', label: 'label 2' },
    { id: '3', label: 'label 3' },
    { id: '4', label: 'label 4' }
  ];
  list.addEventListener('xnSelect', event => {
    const selectedItem = event.detail.item;
    console.log(selectedItem.value);
    cb.value = selectedItem.innerText;
  });
</script>
```

[component-metadata:xena-list]
