# Panel

[component-header:xena-panel]

When to use panels:

- If you are creating a simple plugin you may not need panels but should just create a webpage with no "chrome", making use of the whole width.
- If you are creating a new view for Xena, like a dashboard, you should create your own panels.

Be careful not to have to many panels in the same view as each panel draws attention and will confuse the user.

```html preview
<xena-panel header="This is a header">
  This is the body.
</xena-panel>
```

[component-metadata:xena-panel]
