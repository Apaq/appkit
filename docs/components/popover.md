# Popover

[component-header:xena-popover]

Popover utilizes the component dropdown and is meant to be used to show information for a given element. Ie. a notification popover.

Popups consist of a trigger and a panel combined by 3 slots. By default, as the dropdown, the popover will expose the panel and interacting outside of the panel will close the panel.

```html preview
<xena-popover>
  <div slot="header">This is I, your header</div>
  <div slot="trigger">
    <xena-button>Popover</xena-button>
  </div>
  <p>And this guy can contain alot of text for your popover. You are free to use HTML as your please here ;-)</p>
  <p><a href="#">Maybe use a link also?</a></p>
</xena-popover>
```

## Examples

### Open on render

The popover can be rendered as open by setting the `open`-attribute to `true`. The popover will as documented close when interaction is detected outside the panel of the popover.

```html preview
<xena-popover open="true">
  <div slot="header">I is open</div>
  <div slot="trigger">
    <xena-button>Popover</xena-button>
  </div>
  <p>When I'm rendered, I will open myself - no need for you to tell me to open. Just set <code>code</code> to true</p>
  <p><a href="#">Maybe use a link also?</a></p>
</xena-popover>
```

### Show arrow

An arrow pointing towards the trigger can be enabled by setting `arrow`-attribute to `true`.
When using arrow 10 pixels are added to the panel distance from the trigger. The distance can be adjusted with the `distance`-attribute

```html preview
<xena-popover arrow="true">
  <div slot="header">Se my arrow?</div>
  <div slot="trigger">
    <xena-button>Popover</xena-button>
  </div>
  <p>I have the possibility to show an arrow that will point to my trigger. Just set <code>arrow</code> to true</p>
  <p><a href="#">Maybe use a link also?</a></p>
</xena-popover>
```

### Panel width

The panel is by default minimum `15rem` wide. Custom CSS can specified with parts. To modify CSS for the panel the following CSS can used

```
xena-popover::part(base) {
  min-width: 15rem;
}
```

```html preview
<xena-popover class="width">
  <div slot="header">I'm a large one!</div>
  <div slot="trigger">
    <xena-button>Popover</xena-button>
  </div>
  <p>Wow! My minimum width is set to 30rem :o</p>
</xena-popover>

<style>
  xena-popover.width::part(base) {
    min-width: 30rem;
    text-align: center;
  }
</style>
```

[component-metadata:xena-popover]
