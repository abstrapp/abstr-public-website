import type { Meta, StoryObj } from '@storybook/angular';
import { AbcFooter } from './footer';

const meta: Meta<AbcFooter> = {
  component: AbcFooter,
  title: 'FooterComponent',
};
export default meta;
type Story = StoryObj<AbcFooter>;

export const Primary: Story = {
  args: {},
};

