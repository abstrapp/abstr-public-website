import type { Meta, StoryObj } from '@storybook/angular';
import { AbcHeroContent } from './hero-content';

const meta: Meta<AbcHeroContent> = {
  component: AbcHeroContent,
  title: 'HeroContent',
};
export default meta;
type Story = StoryObj<AbcHeroContent>;

export const Primary: Story = {
  args: {
    title: 'Angular + Abstrapp CMS',
    text: `
Build your <strong>Angular</strong> components, Deploy it to the <strong>Abstrapp registry</strong>.</br>
Now create and deploy your sites via the <strong>Abstrapp CMS</strong>!
`,
    image: {
      src: 'https://placehold.co/800x400',
      alt: 'Hero Image'
    }
  },
};
