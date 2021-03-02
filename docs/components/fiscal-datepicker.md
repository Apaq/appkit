# Fiscal Datepicker

[component-header:xena-fiscal-datepicker]

The FiscalDatePicker is an input field especially designed for selecting dates in Xena. It uses `<xena-fiscal-calendar>` and specifies date as number of days since Unix Epoch, called FiscalDate.

```html preview
<xena-fiscal-datepicker date="18500" class="date-picker"></xena-fiscal-datepicker>

<script>
  const dp = document.querySelector('.date-picker');
  dp.addEventListener('dateChange', ev => {
    console.log(ev.detail);
  });
</script>
```

### Sizes

Use the `size` prop to change an datepicker's size.

```html preview
<xena-fiscal-datepicker size="small" style="margin-bottom:20px"></xena-fiscal-datepicker>
<xena-fiscal-datepicker size="medium" style="margin-bottom:20px"></xena-fiscal-datepicker>
<xena-fiscal-datepicker size="large"></xena-fiscal-datepicker>
```

### Shapes

Use the `shape` prop to change a datepicker's shape.

```html preview
<xena-fiscal-datepicker shape="round" style="margin-bottom:20px"></xena-fiscal-datepicker>
<xena-fiscal-datepicker style="margin-bottom:20px"></xena-fiscal-datepicker>
<xena-fiscal-datepicker shape="edged"></xena-fiscal-datepicker>
```

[component-metadata:xena-fiscal-datepicker]
