import { newSpecPage } from '@stencil/core/testing';
import { SwcTextbox } from '../swc-textbox';

describe('swc-textbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcTextbox],
      html: `<swc-textbox></swc-textbox>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-textbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-textbox>
    `);
  });
});
