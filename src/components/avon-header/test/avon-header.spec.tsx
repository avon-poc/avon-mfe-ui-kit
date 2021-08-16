import { newSpecPage } from '@stencil/core/testing';
import { AvonHeader } from '../avon-header';

describe('avon-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AvonHeader],
      html: `<avon-header></avon-header>`,
    });
    expect(page.root).toEqualHtml(`
      <avon-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </avon-header>
    `);
  });
});
