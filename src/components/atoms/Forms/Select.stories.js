import React from 'react';
import {Select} from './Select';

const SelectStory = {
  title: 'Components/Select',
  component: Select,
};

const Template = (args) => (
  <Select {...args}>
    <option value='Select a bank' selected>
      Select a bank
    </option>
    <option value='gtbank'>GtBank</option>
    <option value='acccess'>Access Bank</option>
  </Select>
);

export const SelectOptions = Template.bind({});
SelectOptions.args = {
  title: 'Select Bank',
};

export default SelectStory;
