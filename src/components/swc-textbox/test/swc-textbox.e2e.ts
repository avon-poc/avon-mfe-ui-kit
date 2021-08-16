import { newE2EPage } from '@stencil/core/testing';

describe('swc-textbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-textbox></swc-textbox>');

    const element = await page.find('swc-textbox');
    expect(element).toHaveClass('hydrated');
  });
});
