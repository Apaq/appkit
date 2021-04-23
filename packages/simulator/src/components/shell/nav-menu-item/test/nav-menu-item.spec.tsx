import { newSpecPage } from '@stencil/core/testing';
import { NavMenuItem } from '../nav-menu-item';

describe('nav-menu-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NavMenuItem],
      html: `<nav-menu-item></nav-menu-item>`,
    });
    expect(page.root).toEqualHtml(`
      <nav-menu-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nav-menu-item>
    `);
  });
});
