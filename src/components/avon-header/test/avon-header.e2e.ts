import { newE2EPage } from '@stencil/core/testing';

describe('avon-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<avon-header></avon-header>');

    const element = await page.find('avon-header');
    expect(element).toHaveClass('hydrated');
  });
});
