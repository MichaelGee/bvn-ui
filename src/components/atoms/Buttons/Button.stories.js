import React from 'react';
import {select} from '@storybook/addon-knobs';
import {Button} from './Button';

const ButtonStory = {
  title: 'Components/Button',
  component: Button,
};

const sizeOptions = ['small', 'medium', 'large'];

const Template = (args) => (
  <Button
    {...args}
    size={select('Size', sizeOptions, 'normal')}
  >
    {args.text}
  </Button>
);

export const Primary = Template.bind({});
Primary.args = {
  color: 'blue',
  text: 'Login',
  small: true,
  outline: false,
};

export const NumberButton = Template.bind({});
NumberButton.args = {
  color: 'blue',
  text: '1',
  small: true,
  outline: false,
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//     appearance: 'secondary',
//     text: 'Login to dashboard'
// }

export default ButtonStory;
