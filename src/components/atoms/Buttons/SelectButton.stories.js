import React from 'react';
import {select} from '@storybook/addon-knobs';
import {SelectButton} from './SelectButton';

const ButtonStory = {
  title: 'Components/SelectButton',
  component: SelectButton,
};

const sizeOptions = ['small', 'medium', 'large'];

const Template = (args) => (
  <SelectButton
    {...args}
    size={select('Size', sizeOptions, 'normal')}
  >
    {args.text}
  </SelectButton>
);

export const Select = Template.bind({});
Select.args = {
  active: true,
  text: 'BVN',
};

export default ButtonStory;
