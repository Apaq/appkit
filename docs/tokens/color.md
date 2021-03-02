# Color Tokens

Color tokens are used to maintain consistent color use throughout your app.

## Theme Colors

Theme colors are based on HSL values rather than hex or RGB. This technique lets us generate more consistent palettes for every theme color, ranging from 5% to 95% lightness. There are no 0% or 100% values for theme colors. Use `--xena-color-black` and `--xena-color-white` instead.

Theme colors include primary, gray, success, info, warning, and danger. They are used extensively throughout the library to maintain a consistent appearance across components.

To customize a theme color, change its respective hue, saturation, and text tokens. Possible theme colors include `primary`, `gray`, `success`, `info`, `warning`, and `danger`.

This will make all colors in the primary color palette various shades of purple.

```css
:root {
  --xena-color-primary-hue: 290;
  --xena-color-primary-saturation: 87%;
  --xena-color-primary-text: var(--xena-color-white);
}
```

You can update these values on the client and the changes will reflect instantly. To update the primary color using JavaScript, try this.

```js
document.documentElement.style.setProperty('--xena-color-primary-hue', '290');
document.documentElement.style.setProperty('--xena-color-primary-saturation', '87%');
```

?> Although CSS lets you override custom properties on specific elements, these values _must_ be scoped to the `:root` block for the entire palette to be recalculated. [See this page for details.](https://stackoverflow.com/questions/52015737/css-scoped-custom-property-ignored-when-used-to-calculate-variable-in-outer-scop)

## Primary

| Token                     | Example                                                                                |
| ------------------------- | -------------------------------------------------------------------------------------- |
| `--xena-color-primary-5`  | <div class="color-demo" style="background-color: var(--xena-color-primary-5);"></div>  |
| `--xena-color-primary-10` | <div class="color-demo" style="background-color: var(--xena-color-primary-10);"></div> |
| `--xena-color-primary-15` | <div class="color-demo" style="background-color: var(--xena-color-primary-15);"></div> |
| `--xena-color-primary-20` | <div class="color-demo" style="background-color: var(--xena-color-primary-20);"></div> |
| `--xena-color-primary-25` | <div class="color-demo" style="background-color: var(--xena-color-primary-25);"></div> |
| `--xena-color-primary-30` | <div class="color-demo" style="background-color: var(--xena-color-primary-30);"></div> |
| `--xena-color-primary-35` | <div class="color-demo" style="background-color: var(--xena-color-primary-35);"></div> |
| `--xena-color-primary-40` | <div class="color-demo" style="background-color: var(--xena-color-primary-40);"></div> |
| `--xena-color-primary-45` | <div class="color-demo" style="background-color: var(--xena-color-primary-45);"></div> |
| `--xena-color-primary-50` | <div class="color-demo" style="background-color: var(--xena-color-primary-50);"></div> |
| `--xena-color-primary-55` | <div class="color-demo" style="background-color: var(--xena-color-primary-55);"></div> |
| `--xena-color-primary-60` | <div class="color-demo" style="background-color: var(--xena-color-primary-60);"></div> |
| `--xena-color-primary-65` | <div class="color-demo" style="background-color: var(--xena-color-primary-65);"></div> |
| `--xena-color-primary-70` | <div class="color-demo" style="background-color: var(--xena-color-primary-70);"></div> |
| `--xena-color-primary-75` | <div class="color-demo" style="background-color: var(--xena-color-primary-75);"></div> |
| `--xena-color-primary-80` | <div class="color-demo" style="background-color: var(--xena-color-primary-80);"></div> |
| `--xena-color-primary-85` | <div class="color-demo" style="background-color: var(--xena-color-primary-85);"></div> |
| `--xena-color-primary-90` | <div class="color-demo" style="background-color: var(--xena-color-primary-90);"></div> |
| `--xena-color-primary-95` | <div class="color-demo" style="background-color: var(--xena-color-primary-95);"></div> |

## Gray

| Token                  | Example                                                                             |
| ---------------------- | ----------------------------------------------------------------------------------- |
| `--xena-color-black`   | <div class="color-demo" style="background-color: var(--xena-color-black);"></div>   |
| `--xena-color-gray-5`  | <div class="color-demo" style="background-color: var(--xena-color-gray-5);"></div>  |
| `--xena-color-gray-10` | <div class="color-demo" style="background-color: var(--xena-color-gray-10);"></div> |
| `--xena-color-gray-15` | <div class="color-demo" style="background-color: var(--xena-color-gray-15);"></div> |
| `--xena-color-gray-20` | <div class="color-demo" style="background-color: var(--xena-color-gray-20);"></div> |
| `--xena-color-gray-25` | <div class="color-demo" style="background-color: var(--xena-color-gray-25);"></div> |
| `--xena-color-gray-30` | <div class="color-demo" style="background-color: var(--xena-color-gray-30);"></div> |
| `--xena-color-gray-35` | <div class="color-demo" style="background-color: var(--xena-color-gray-35);"></div> |
| `--xena-color-gray-40` | <div class="color-demo" style="background-color: var(--xena-color-gray-40);"></div> |
| `--xena-color-gray-45` | <div class="color-demo" style="background-color: var(--xena-color-gray-45);"></div> |
| `--xena-color-gray-50` | <div class="color-demo" style="background-color: var(--xena-color-gray-50);"></div> |
| `--xena-color-gray-55` | <div class="color-demo" style="background-color: var(--xena-color-gray-55);"></div> |
| `--xena-color-gray-60` | <div class="color-demo" style="background-color: var(--xena-color-gray-60);"></div> |
| `--xena-color-gray-65` | <div class="color-demo" style="background-color: var(--xena-color-gray-65);"></div> |
| `--xena-color-gray-70` | <div class="color-demo" style="background-color: var(--xena-color-gray-70);"></div> |
| `--xena-color-gray-75` | <div class="color-demo" style="background-color: var(--xena-color-gray-75);"></div> |
| `--xena-color-gray-80` | <div class="color-demo" style="background-color: var(--xena-color-gray-80);"></div> |
| `--xena-color-gray-85` | <div class="color-demo" style="background-color: var(--xena-color-gray-85);"></div> |
| `--xena-color-gray-90` | <div class="color-demo" style="background-color: var(--xena-color-gray-90);"></div> |
| `--xena-color-gray-95` | <div class="color-demo" style="background-color: var(--xena-color-gray-95);"></div> |
| `--xena-color-white`   | <div class="color-demo" style="background-color: var(--xena-color-white);"></div>   |

## Success

| Token                     | Example                                                                                |
| ------------------------- | -------------------------------------------------------------------------------------- |
| `--xena-color-success-5`  | <div class="color-demo" style="background-color: var(--xena-color-success-5);"></div>  |
| `--xena-color-success-10` | <div class="color-demo" style="background-color: var(--xena-color-success-10);"></div> |
| `--xena-color-success-15` | <div class="color-demo" style="background-color: var(--xena-color-success-15);"></div> |
| `--xena-color-success-20` | <div class="color-demo" style="background-color: var(--xena-color-success-20);"></div> |
| `--xena-color-success-25` | <div class="color-demo" style="background-color: var(--xena-color-success-25);"></div> |
| `--xena-color-success-30` | <div class="color-demo" style="background-color: var(--xena-color-success-30);"></div> |
| `--xena-color-success-35` | <div class="color-demo" style="background-color: var(--xena-color-success-35);"></div> |
| `--xena-color-success-40` | <div class="color-demo" style="background-color: var(--xena-color-success-40);"></div> |
| `--xena-color-success-45` | <div class="color-demo" style="background-color: var(--xena-color-success-45);"></div> |
| `--xena-color-success-50` | <div class="color-demo" style="background-color: var(--xena-color-success-50);"></div> |
| `--xena-color-success-55` | <div class="color-demo" style="background-color: var(--xena-color-success-55);"></div> |
| `--xena-color-success-60` | <div class="color-demo" style="background-color: var(--xena-color-success-60);"></div> |
| `--xena-color-success-65` | <div class="color-demo" style="background-color: var(--xena-color-success-65);"></div> |
| `--xena-color-success-70` | <div class="color-demo" style="background-color: var(--xena-color-success-70);"></div> |
| `--xena-color-success-75` | <div class="color-demo" style="background-color: var(--xena-color-success-75);"></div> |
| `--xena-color-success-80` | <div class="color-demo" style="background-color: var(--xena-color-success-80);"></div> |
| `--xena-color-success-85` | <div class="color-demo" style="background-color: var(--xena-color-success-85);"></div> |
| `--xena-color-success-90` | <div class="color-demo" style="background-color: var(--xena-color-success-90);"></div> |
| `--xena-color-success-95` | <div class="color-demo" style="background-color: var(--xena-color-success-95);"></div> |

## Info

| Token                  | Example                                                                             |
| ---------------------- | ----------------------------------------------------------------------------------- |
| `--xena-color-info-5`  | <div class="color-demo" style="background-color: var(--xena-color-info-5);"></div>  |
| `--xena-color-info-10` | <div class="color-demo" style="background-color: var(--xena-color-info-10);"></div> |
| `--xena-color-info-15` | <div class="color-demo" style="background-color: var(--xena-color-info-15);"></div> |
| `--xena-color-info-20` | <div class="color-demo" style="background-color: var(--xena-color-info-20);"></div> |
| `--xena-color-info-25` | <div class="color-demo" style="background-color: var(--xena-color-info-25);"></div> |
| `--xena-color-info-30` | <div class="color-demo" style="background-color: var(--xena-color-info-30);"></div> |
| `--xena-color-info-35` | <div class="color-demo" style="background-color: var(--xena-color-info-35);"></div> |
| `--xena-color-info-40` | <div class="color-demo" style="background-color: var(--xena-color-info-40);"></div> |
| `--xena-color-info-45` | <div class="color-demo" style="background-color: var(--xena-color-info-45);"></div> |
| `--xena-color-info-50` | <div class="color-demo" style="background-color: var(--xena-color-info-50);"></div> |
| `--xena-color-info-55` | <div class="color-demo" style="background-color: var(--xena-color-info-55);"></div> |
| `--xena-color-info-60` | <div class="color-demo" style="background-color: var(--xena-color-info-60);"></div> |
| `--xena-color-info-65` | <div class="color-demo" style="background-color: var(--xena-color-info-65);"></div> |
| `--xena-color-info-70` | <div class="color-demo" style="background-color: var(--xena-color-info-70);"></div> |
| `--xena-color-info-75` | <div class="color-demo" style="background-color: var(--xena-color-info-75);"></div> |
| `--xena-color-info-80` | <div class="color-demo" style="background-color: var(--xena-color-info-80);"></div> |
| `--xena-color-info-85` | <div class="color-demo" style="background-color: var(--xena-color-info-85);"></div> |
| `--xena-color-info-90` | <div class="color-demo" style="background-color: var(--xena-color-info-90);"></div> |
| `--xena-color-info-95` | <div class="color-demo" style="background-color: var(--xena-color-info-95);"></div> |

## Warning

| Token                     | Example                                                                                |
| ------------------------- | -------------------------------------------------------------------------------------- |
| `--xena-color-warning-5`  | <div class="color-demo" style="background-color: var(--xena-color-warning-5);"></div>  |
| `--xena-color-warning-10` | <div class="color-demo" style="background-color: var(--xena-color-warning-10);"></div> |
| `--xena-color-warning-15` | <div class="color-demo" style="background-color: var(--xena-color-warning-15);"></div> |
| `--xena-color-warning-20` | <div class="color-demo" style="background-color: var(--xena-color-warning-20);"></div> |
| `--xena-color-warning-25` | <div class="color-demo" style="background-color: var(--xena-color-warning-25);"></div> |
| `--xena-color-warning-30` | <div class="color-demo" style="background-color: var(--xena-color-warning-30);"></div> |
| `--xena-color-warning-35` | <div class="color-demo" style="background-color: var(--xena-color-warning-35);"></div> |
| `--xena-color-warning-40` | <div class="color-demo" style="background-color: var(--xena-color-warning-40);"></div> |
| `--xena-color-warning-45` | <div class="color-demo" style="background-color: var(--xena-color-warning-45);"></div> |
| `--xena-color-warning-50` | <div class="color-demo" style="background-color: var(--xena-color-warning-50);"></div> |
| `--xena-color-warning-55` | <div class="color-demo" style="background-color: var(--xena-color-warning-55);"></div> |
| `--xena-color-warning-60` | <div class="color-demo" style="background-color: var(--xena-color-warning-60);"></div> |
| `--xena-color-warning-65` | <div class="color-demo" style="background-color: var(--xena-color-warning-65);"></div> |
| `--xena-color-warning-70` | <div class="color-demo" style="background-color: var(--xena-color-warning-70);"></div> |
| `--xena-color-warning-75` | <div class="color-demo" style="background-color: var(--xena-color-warning-75);"></div> |
| `--xena-color-warning-80` | <div class="color-demo" style="background-color: var(--xena-color-warning-80);"></div> |
| `--xena-color-warning-85` | <div class="color-demo" style="background-color: var(--xena-color-warning-85);"></div> |
| `--xena-color-warning-90` | <div class="color-demo" style="background-color: var(--xena-color-warning-90);"></div> |
| `--xena-color-warning-95` | <div class="color-demo" style="background-color: var(--xena-color-warning-95);"></div> |

## Danger

| Token                    | Example                                                                               |
| ------------------------ | ------------------------------------------------------------------------------------- |
| `--xena-color-danger-5`  | <div class="color-demo" style="background-color: var(--xena-color-danger-5);"></div>  |
| `--xena-color-danger-10` | <div class="color-demo" style="background-color: var(--xena-color-danger-10);"></div> |
| `--xena-color-danger-15` | <div class="color-demo" style="background-color: var(--xena-color-danger-15);"></div> |
| `--xena-color-danger-20` | <div class="color-demo" style="background-color: var(--xena-color-danger-20);"></div> |
| `--xena-color-danger-25` | <div class="color-demo" style="background-color: var(--xena-color-danger-25);"></div> |
| `--xena-color-danger-30` | <div class="color-demo" style="background-color: var(--xena-color-danger-30);"></div> |
| `--xena-color-danger-35` | <div class="color-demo" style="background-color: var(--xena-color-danger-35);"></div> |
| `--xena-color-danger-40` | <div class="color-demo" style="background-color: var(--xena-color-danger-40);"></div> |
| `--xena-color-danger-45` | <div class="color-demo" style="background-color: var(--xena-color-danger-45);"></div> |
| `--xena-color-danger-50` | <div class="color-demo" style="background-color: var(--xena-color-danger-50);"></div> |
| `--xena-color-danger-55` | <div class="color-demo" style="background-color: var(--xena-color-danger-55);"></div> |
| `--xena-color-danger-60` | <div class="color-demo" style="background-color: var(--xena-color-danger-60);"></div> |
| `--xena-color-danger-65` | <div class="color-demo" style="background-color: var(--xena-color-danger-65);"></div> |
| `--xena-color-danger-70` | <div class="color-demo" style="background-color: var(--xena-color-danger-70);"></div> |
| `--xena-color-danger-75` | <div class="color-demo" style="background-color: var(--xena-color-danger-75);"></div> |
| `--xena-color-danger-80` | <div class="color-demo" style="background-color: var(--xena-color-danger-80);"></div> |
| `--xena-color-danger-85` | <div class="color-demo" style="background-color: var(--xena-color-danger-85);"></div> |
| `--xena-color-danger-90` | <div class="color-demo" style="background-color: var(--xena-color-danger-90);"></div> |
| `--xena-color-danger-95` | <div class="color-demo" style="background-color: var(--xena-color-danger-95);"></div> |
