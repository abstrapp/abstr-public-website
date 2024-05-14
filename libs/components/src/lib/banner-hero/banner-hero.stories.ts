import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { AbcBannerHero } from './banner-hero';
import { RouterTestingModule } from '@angular/router/testing';

const meta: Meta<AbcBannerHero> = {
  component: AbcBannerHero,
  title: 'BannerHeroComponent',
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule]
    })
  ]
};

export default meta;

type Story = StoryObj<AbcBannerHero>;

export const Primary: Story = {
  args: {
    title: 'Welcome to Abstr.app!',
    subtitle: 'Supercharge your web development',
    link: {
      href: '/',
      text: 'Request access now!'
    },
  },
};
