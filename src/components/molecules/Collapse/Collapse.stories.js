import React from 'react';
import {Collapse} from './Collapse';

const CollapseStory = {
  title: 'Components/Collapse',
  component: Collapse,
};

const Template = (args) => <Collapse {...args} />;

export const InformationCollapse = Template.bind(
  {}
);

export default CollapseStory;
