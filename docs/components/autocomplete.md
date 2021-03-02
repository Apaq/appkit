# Autocomplete

[component-header:xena-autocomplete]

An autocomplete allows users to search and select data.

This autoselect component is simple to use component that builds upon input and dropdown and allows for searching data from a given datasource. It does not require the data elements to be of a specific structure, but by default expects it to have an `id` and a `label` property. However these defaults can be changed via attributes on the element.

In its most simple form it is simply a matter of setting a datasource that can return data. (This one is will not filter the results)

```html preview
<xena-autocomplete placeholder="Type search" id="ac-1"></xena-autocomplete>
<script>
  const data = [
    { id: '1', label: 'Lasse' },
    { id: '2', label: 'Michael' },
    { id: '3', label: 'Rasmus' },
    { id: '4', label: 'Stefan' }
  ];
  const ac = document.querySelector('#ac-1');
  ac.setDatasource(search => {
    return Promise.resolve(data);
  });
</script>
```

### Scroll

```html preview
<xena-autocomplete placeholder="Type search" id="ac-1-1" max-dropdown-height="100px"></xena-autocomplete>
<script>
  const data = [];

  for (let i = 1; i <= 100; i++) {
    data.push({
      id: '' + i,
      label: `Entry number ${
        i
      } ${i % 10 == 0 ? 'followed by a very long text just to ensure that width of this dropdown is also handled correctly' : ''}`
    });
  }

  const ac = document.querySelector('#ac-1-1');
  ac.setDatasource(search => {
    return Promise.resolve(data);
  });
</script>
```

### Debounce

In many situations the data needs to be searchable and debounced as requests are going to a server or the like. Debounce can be added as a parameter and the search input string can be used for searching.

```html preview
<xena-autocomplete id="ac-2" debounce="300" placeholder="Type search"></xena-autocomplete>
<script>
  const data = [
    { id: '1', label: 'Lasse' },
    { id: '2', label: 'Michael' },
    { id: '3', label: 'Rasmus' },
    { id: '4', label: 'Stefan' }
  ];
  const ac = document.querySelector('#ac-2');

  ac.setDatasource(search => {
    const result = [];
    for (let i = 0; i < data.length; i++) {
      if (search.trim() === '' || data[i].label.toLowerCase().substr(0, search.length) === search.toLowerCase()) {
        result.push(data[i]);
      }
    }

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result), 100);
    });
  });

  ac.addEventListener('valueChange', event => {
    const selectedItem = event.detail;
    console.log(selectedItem ? selectedItem.id : null);
  });
</script>
```

### Custom Value Rendering

You may also need to customize the way the value is rendered in the input field or the list. That can be done by specifying `valueLabelProperty` and `listLabelProperty`. This example also shows how to define the properties to use on the objects in use.

```html preview
<xena-autocomplete
  id="ac-3"
  placeholder="Type search"
  id-property="Id"
  list-label-property="Description"
></xena-autocomplete>
<script>
  const data = [
    { Id: '1', Description: 'Lasse' },
    { Id: '2', Description: 'Michael' },
    { Id: '3', Description: 'Rasmus' },
    { Id: '4', Description: 'Stefan' },
    {
      Id: '5',
      Description:
        'Majbritt is the most awesome team leader in the whole wide world - and then some. (READ: Dont mess with her or you will have your glasses turned into an extra set of corneas)'
    }
  ];
  const ac = document.querySelector('#ac-3');

  ac.value = data[0];
  ac.valueLabelProperty = value => (value == null ? '' : `${value.Description}@codezoo`);
  ac.setDatasource(search => {
    const result = [];
    for (let i = 0; i < data.length; i++) {
      if (search.trim() === '' || data[i].Description.toLowerCase().substr(0, search.length) === search.toLowerCase()) {
        result.push(data[i]);
      }
    }

    return Promise.resolve(result);
  });

  ac.addEventListener('valueChange', event => {
    const selectedItem = event.detail;
    console.log(selectedItem ? selectedItem.Id : null);
  });
</script>
```

### Sizes

Use the `size` prop to change an autocomplete's size.

```html preview
<xena-autocomplete size="small" style="margin-bottom:20px"></xena-autocomplete>
<xena-autocomplete size="medium" style="margin-bottom:20px"></xena-autocomplete>
<xena-autocomplete size="large"></xena-autocomplete>
```

### Shapes

Use the `shape` prop to change an autocomplete's shape.

```html preview
<xena-autocomplete shape="round" style="margin-bottom:20px"></xena-autocomplete>
<xena-autocomplete style="margin-bottom:20px"></xena-autocomplete>
<xena-autocomplete shape="edged"></xena-autocomplete>
```

### Disabled input

At other times you need the element to be disabled which is also supported.

```html preview
<xena-autocomplete disabled></xena-autocomplete>
```

[component-metadata:xena-autocomplete]
