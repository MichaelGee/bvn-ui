import React, {useState} from 'react';
import Box from 'ui-box';
import Hand from '../../assets/images/hand.png';
import styled from '@emotion/styled';
import {Collapse} from 'components/molecules/Collapse/Collapse';
import {Button} from 'components/atoms/Buttons/Button';
import {
  Tabs,
  Tab,
  TabPanel,
} from 'components/organisms/Tabs/Tabs';

const Image = styled.img`
  width: 80rem;
`;

const Left = styled(Box)`
  background: ${({theme}) => theme.colors.cream};
  height: 100%;
  padding: 2rem 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin-top: 8rem;
  }
`;

const Right = styled(Box)`
  width: 100%;
  padding: 6rem 10rem;
`;

const TabsContainer = styled.div`
  display: flex;
  padding: 2.8rem 0;
  border-bottom: 1px solid #e9eef4;
`;

const TabPanelContainer = styled.div``;

const Onboarding = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleChange = (e, value) => {
    setActiveTab(value);
  };

  return (
    <Box
      display='flex'
      width='100%'
      height='100vh'
    >
      <Left>
        <Image src={Hand} />
      </Left>
      <Right>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='space-between'
        >
          <Box />
          <Button color='red'>Logout</Button>
        </Box>
        <TabsContainer>
          <Tabs
            selectedTab={activeTab}
            onChange={handleChange}
          >
            <Tab
              label='1'
              text='Verify Account'
              value={0}
            ></Tab>
            <Tab
              label='2'
              text='Social Handles'
              value={1}
            ></Tab>
            <Tab
              label='3'
              text='Business Category'
              value={2}
            ></Tab>
          </Tabs>
        </TabsContainer>
        <TabPanelContainer>
          <TabPanel
            value={activeTab}
            selectedIndex={0}
          >
            <h1>Tab 1</h1>
          </TabPanel>
          <TabPanel
            value={activeTab}
            selectedIndex={1}
          >
            <h1>Tab 2</h1>
          </TabPanel>
          <TabPanel
            value={activeTab}
            selectedIndex={2}
          >
            <h1>Tab 3</h1>
          </TabPanel>
        </TabPanelContainer>
        <Collapse />
      </Right>
    </Box>
  );
};

export default Onboarding;
