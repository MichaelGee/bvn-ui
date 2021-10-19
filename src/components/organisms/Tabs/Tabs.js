import {Button} from 'components/atoms/Buttons/Button';
import {SelectButton} from 'components/atoms/Buttons/SelectButton';
import React, {useRef} from 'react';
import Box from 'ui-box';

import {
  TabHeaderContainer,
  StyledTabPanel,
  TabsHolder,
  TabTitle,
  TabBox,
} from './styled';

export const Tab = ({
  label,
  text,
  active,
  onClick,
}) => {
  return (
    <TabBox
      display='flex'
      alignItems='center'
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
    </TabBox>
  );
};

export const ButtonTab = ({
  text,
  active,
  onClick,
}) => {
  return (
    <Box
      display='flex'
      alignItems='center'
      marginRight='2rem'
      onClick={onClick}
      cursor='pointer'
    >
      <SelectButton
        active={active}
        onClick={onClick}
      >
        {text}
      </SelectButton>
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
