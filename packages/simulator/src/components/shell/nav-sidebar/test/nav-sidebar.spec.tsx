import { newSpecPage } from '@stencil/core/testing';
import { NavSidebar } from '../nav-sidebar';

describe('nav-sidebar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NavSidebar],
      html: `<nav-sidebar></nav-sidebar>`,
    });
    expect(page.root).toEqualHtml(`
      <nav-sidebar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nav-sidebar>
    `);
  });
});
