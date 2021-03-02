# Modal

[component-header:xena-modal]

Modals appear above the page and require the user's immediate attention.

```html preview
<xena-modal label="Modal" class="modal-overview">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <xena-button slot="footer" type="primary">Close</xena-button>
</xena-modal>

<xena-button>Open Modal</xena-button>

<script>
  (() => {
    const modal = document.querySelector('.modal-overview');
    const openButton = modal.nextElementSibling;
    const closeButton = modal.querySelector('xena-button[slot="footer"]');

    openButton.addEventListener('click', () => modal.show());
    closeButton.addEventListener('click', () => modal.hide());
  })();
</script>
```

## UX Tips

- Use a modal when you immediately require the user's attention, e.g. confirming a destructive action.
- Always provide an obvious way for the user to dismiss the modal.
- Don't nest modals. It almost always leads to a poor experience for the user.

## Examples

### Custom Width

Use the `--width` custom property to set the modal's width.

```html preview
<xena-modal label="Modal" class="modal-width" style="--width: 50vw;">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <xena-button slot="footer" type="primary">Close</xena-button>
</xena-modal>

<xena-button>Open Modal</xena-button>

<script>
  (() => {
    const modal = document.querySelector('.modal-width');
    const openButton = modal.nextElementSibling;
    const closeButton = modal.querySelector('xena-button[slot="footer"]');

    openButton.addEventListener('click', () => modal.show());
    closeButton.addEventListener('click', () => modal.hide());
  })();
</script>
```

### Scrolling

By design, a modal's height will never exceed that of the viewport. As such, modals will not scroll with the page ensuring the header and footer are always accessible to the user.

```html preview
<xena-modal label="Modal" class="modal-scrolling">
  <div style="height: 150vh; border: dashed 2px var(--xena-color-gray-80); padding: 0 1rem;">
    <p>Scroll down and give it a try! 👇</p>
  </div>
  <xena-button slot="footer" type="primary">Close</xena-button>
</xena-modal>

<xena-button>Open Modal</xena-button>

<script>
  (() => {
    const modal = document.querySelector('.modal-scrolling');
    const openButton = modal.nextElementSibling;
    const closeButton = modal.querySelector('xena-button[slot="footer"]');

    openButton.addEventListener('click', () => modal.show());
    closeButton.addEventListener('click', () => modal.hide());
  })();
</script>
```

### Ignoring Clicks on the Overlay

By default, modals are closed when the user clicks or taps on the overlay. To prevent this behavior, cancel the `slOverlayDismiss` event.

```html preview
<xena-modal label="Modal" class="modal-no-overlay-dismiss">
  This modal will not be closed when you click outside of it.
  <xena-button slot="footer" type="primary">Close</xena-button>
</xena-modal>

<xena-button>Open Modal</xena-button>

<script>
  (() => {
    const modal = document.querySelector('.modal-no-overlay-dismiss');
    const openButton = modal.nextElementSibling;
    const closeButton = modal.querySelector('xena-button[slot="footer"]');

    openButton.addEventListener('click', () => modal.show());
    closeButton.addEventListener('click', () => modal.hide());

    modal.addEventListener('slOverlayDismiss', event => event.preventDefault());
  })();
</script>
```

[component-metadata:xena-modal]
