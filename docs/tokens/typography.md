# Typography Tokens

Typography tokens are used to maintain a consistent set of font styles throughout your app.

## Font Family

The default font stack is designed to be simple and highly available on as many devices as possible.

| Token               | Value                                                                                                                                         | Example                                                                                                |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `--xena-font-sans`  | -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol' | <span style="font-family: var(--xena-font-sans)">The quick brown fox jumped over the lazy dog.</span>  |
| `--xena-font-serif` | Georgia, 'Times New Roman', serif                                                                                                             | <span style="font-family: var(--xena-font-serif)">The quick brown fox jumped over the lazy dog.</span> |
| `--xena-font-mono`  | Menlo, Monaco, 'Courier New', monospace                                                                                                       | <span style="font-family: var(--xena-font-mono)">The quick brown fox jumped over the lazy dog.</span>  |

## Font Size

Font sizes use `rem` units so they scale with the base font size. The pixel values displayed are based on a 16px font size.

| Token                         | Value           | Example                                                             |
| ----------------------------- | --------------- | ------------------------------------------------------------------- |
| `--xena-font-size-xx-small`   | 0.625rem (10px) | <span style="font-size: var(--xena-font-size-xx-small)">Aa</span>   |
| `--xena-font-size-x-small`    | 0.75rem (12px)  | <span style="font-size: var(--xena-font-size-x-small)">Aa</span>    |
| `--xena-font-size-small`      | 0.875rem (14px) | <span style="font-size: var(--xena-font-size-small)">Aa</span>      |
| `--xena-font-size-medium`     | 1rem (16px)     | <span style="font-size: var(--xena-font-size-medium)">Aa</span>     |
| `--xena-font-size-large`      | 1.25rem (20px)  | <span style="font-size: var(--xena-font-size-large)">Aa</span>      |
| `--xena-font-size-x-large`    | 1.5rem (24px)   | <span style="font-size: var(--xena-font-size-x-large)">Aa</span>    |
| `--xena-font-size-xx-large`   | 2.25rem (36px)  | <span style="font-size: var(--xena-font-size-xx-large)">Aa</span>   |
| `--xena-font-size-xxx-large`  | 3rem (48px)     | <span style="font-size: var(--xena-font-size-xxx-large)">Aa</span>  |
| `--xena-font-size-xxxx-large` | 4.5rem (72px)   | <span style="font-size: var(--xena-font-size-xxxx-large)">Aa</span> |

## Font Weight

| Token                         | Value | Example                                                                                                           |
| ----------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------- |
| `--xena-font-weight-light`    | 300   | <span style="font-weight: var(--xena-font-weight-light);">The quick brown fox jumped over the lazy dog.</span>    |
| `--xena-font-weight-normal`   | 400   | <span style="font-weight: var(--xena-font-weight-normal);">The quick brown fox jumped over the lazy dog.</span>   |
| `--xena-font-weight-semibold` | 500   | <span style="font-weight: var(--xena-font-weight-semibold);">The quick brown fox jumped over the lazy dog.</span> |
| `--xena-font-weight-bold`     | 700   | <span style="font-weight: var(--xena-font-weight-bold);">The quick brown fox jumped over the lazy dog.</span>     |

## Letter Spacing

| Token                          | Value    | Example                                                                                                               |
| ------------------------------ | -------- | --------------------------------------------------------------------------------------------------------------------- |
| `--xena-letter-spacing-dense`  | -0.015em | <span style="letter-spacing: var(--xena-letter-spacing-dense);">The quick brown fox jumped over the lazy dog.</span>  |
| `--xena-letter-spacing-normal` | normal   | <span style="letter-spacing: var(--xena-letter-spacing-normal);">The quick brown fox jumped over the lazy dog.</span> |
| `--xena-letter-spacing-loose`  | 0.075em  | <span style="letter-spacing: var(--xena-letter-spacing-loose);">The quick brown fox jumped over the lazy dog.</span>  |

## Line Height

| Token                       | Value | Example                                                                                                                                                                                                         |
| --------------------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--xena-line-height-dense`  | 1.4   | <div style="line-height: var(--xena-line-height-dense);">The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.</div>  |
| `--xena-line-height-normal` | 1.8   | <div style="line-height: var(--xena-line-height-normal);">The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.</div> |
| `--xena-line-height-loose`  | 2.2   | <div style="line-height: var(--xena-line-height-loose);">The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.</div>  |
