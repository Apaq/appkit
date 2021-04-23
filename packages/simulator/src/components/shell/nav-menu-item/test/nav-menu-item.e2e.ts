import { newE2EPage } from '@stencil/core/testing';

describe('nav-menu-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nav-menu-item></nav-menu-item>');

    const element = await page.find('nav-menu-item');
    expect(element).toHaveClass('hydrated');
  });
});
