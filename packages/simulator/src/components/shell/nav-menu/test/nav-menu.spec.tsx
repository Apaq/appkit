import { newSpecPage } from '@stencil/core/testing';
import { NavMenu } from '../nav-menu';

describe('nav-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NavMenu],
      html: `<nav-menu></nav-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <nav-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nav-menu>
    `);
  });
});
