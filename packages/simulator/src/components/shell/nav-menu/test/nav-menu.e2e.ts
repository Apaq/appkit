import { newE2EPage } from '@stencil/core/testing';

describe('nav-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nav-menu></nav-menu>');

    const element = await page.find('nav-menu');
    expect(element).toHaveClass('hydrated');
  });
});
