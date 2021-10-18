import {Button} from 'components/atoms/Buttons/Button';
import React, {useRef} from 'react';
import Box from 'ui-box';

import {
  TabHeaderContainer,
  StyledTabPanel,
  TabsHolder,
  TabTitle,
} from './styled';

export const Tab = ({
  label,
  text,
  active,
  onClick,
}) => {
  return (
    <Box
      display='flex'
      alignItems='center'
      marginRight='5rem'
      onClick={onClick}
      cursor='pointer'
    >
      <Button
        outline={!active}
        color='blue'
        small
        onClick={onClick}
      >
        {label}
      </Button>
      <TabTitle active={active}>{text}</TabTitle>
    </Box>
  );
};

export const Tabs = ({
  selectedTab,
  onChange,
  children,
}) => {
  const containerRef = useRef(null);

  const tabs = children.map((child) => {
    const handleClick = (e) => {
      onChange(e, child.props.value);
    };

    return React.cloneElement(child, {
      key: child.props.value,
      active: child.props.value === selectedTab,
      onClick: handleClick,
    });
  });

  return (
    <TabHeaderContainer ref={containerRef}>
      <TabsHolder>{tabs}</TabsHolder>
      {/* <TabSlider
        width={sliderWidth}
        index={selectedTab}
      /> */}
    </TabHeaderContainer>
  );
};

export const TabPanel = ({
  children,
  value,
  selectedIndex,
}) => {
  const hidden = value !== selectedIndex;

  return (
    <StyledTabPanel
      hidden={hidden}
      active={!hidden}
    >
      {children}
    </StyledTabPanel>
  );
};
