import { newE2EPage } from '@stencil/core/testing';

describe('nav-sidebar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nav-sidebar></nav-sidebar>');

    const element = await page.find('nav-sidebar');
    expect(element).toHaveClass('hydrated');
  });
});
