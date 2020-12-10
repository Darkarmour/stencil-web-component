import { newE2EPage } from '@stencil/core/testing';

describe('profile-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<profile-component></profile-component>');

    const element = await page.find('profile-component');
    expect(element).toHaveClass('hydrated');
  });
});
