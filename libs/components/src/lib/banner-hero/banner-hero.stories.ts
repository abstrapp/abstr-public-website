import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { BannerHeroComponent } from './banner-hero';
import { RouterTestingModule } from '@angular/router/testing';

const meta: Meta<BannerHeroComponent> = {
  component: BannerHeroComponent,
  title: 'BannerHeroComponent',
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule]
    })
  ]
};

export default meta;

type Story = StoryObj<BannerHeroComponent>;

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
