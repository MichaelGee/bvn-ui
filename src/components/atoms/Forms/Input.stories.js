import React from 'react';
import {Input} from './Input';

const InputStory = {
  title: 'Components/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {
  title: 'Account Number',
};

export default InputStory;
