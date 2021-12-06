import { Meta, Story } from '@storybook/angular';
import { QuantityInputComponent } from './quantity-input.component';

export default {
  title: 'Controls/Quantity Input',
  component: QuantityInputComponent,
} as Meta;

const Template: Story<QuantityInputComponent> = (
  args: QuantityInputComponent
) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  value: 5,
  disabled: false,
  min: 0,
  max: 20,
};
