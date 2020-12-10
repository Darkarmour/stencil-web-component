import { newSpecPage } from '@stencil/core/testing';
import { ProfileComponent } from '../profile-component';

describe('profile-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ProfileComponent],
      html: `<profile-component></profile-component>`,
    });
    expect(page.root).toEqualHtml(`
      <profile-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </profile-component>
    `);
  });
});
