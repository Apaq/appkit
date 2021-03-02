# Alert

[component-header:xena-alert]

Alerts are used to display important messages either inline or as toast notifications.

```html preview
<xena-alert>
  This is a standard alert. You can customize its content and even the icon.
</xena-alert>
```

## Examples

### Types

Set the `type` attribute to change the alert's type.

```html preview
<xena-alert type="primary">
  <strong>This is super informative</strong><br />
  You can tell by how pretty the alert is.
</xena-alert>

<br />

<xena-alert type="success">
  <strong>Your changes have been saved</strong><br />
  You can safely exit the app now.
</xena-alert>

<br />

<xena-alert type="info">
  <strong>Your settings have been updated</strong><br />
  Settings will take affect on next login.
</xena-alert>

<br />

<xena-alert type="warning">
  <strong>Your session has ended</strong><br />
  Please login again to continue.
</xena-alert>

<br />

<xena-alert type="danger">
  <strong>Your account has been deleted</strong><br />
  We're very sorry to see you go!
</xena-alert>
```

### Closable

Add the `closable` attribute to show a close button that will hide the alert.

```html preview
<xena-alert type="primary" closable>
  You can close this alert any time!
</xena-alert>
```

[component-metadata:xena-alert]
