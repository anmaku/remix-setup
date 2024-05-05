import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import MyModal from "~/components/MyModal";

const meta = {
  title: 'Example/MyModal',
  component: MyModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof MyModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};