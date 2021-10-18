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
  ButtonTab,
} from 'components/organisms/Tabs/Tabs';
import {VerifyAccountTab} from 'components/organisms/TabContents/VerifyAccountTab';

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

const Steps = styled.p`
  color: ${({theme}) => theme.colors.gray3};
  font-size: 13px;
  line-height: 17px;
  font-weight: 200;
  opacity: 0.5;
  margin: 40px 0 19px 0;
`;

const Bottom = styled(Box)`
  border-top: 1px solid #e9eef4;
  padding: 3rem 0;
`;

const TabTitle = styled.h1`
  font-size: 26px;
  line-height: 34px;
  color: ${({theme}) => theme.colors.black};
  font-weight: bold;
`;

const Onboarding = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleChange = (e, value) => {
    setActiveTab(value);
  };

  const changeTitle = () => {
    switch (activeTab) {
      case 0:
        return 'Verify Account';
      case 1:
        return 'Social Handles';
      case 2:
        return 'Business Category';
      default:
        break;
    }
  };

  const changeStep = () => {
    switch (activeTab) {
      case 0:
        return 1;
      case 1:
        return 2;
      case 2:
        return 3;
      default:
        break;
    }
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
            />
            <Tab
              label='2'
              text='Social Handles'
              value={1}
            />
            <Tab
              label='3'
              text='Business Category'
              value={2}
            />
          </Tabs>
        </TabsContainer>
        <Steps>Step {changeStep()}/3</Steps>
        <TabTitle>{changeTitle()}</TabTitle>
        {/* Tabs */}
        <TabPanelContainer>
          <TabPanel
            value={activeTab}
            selectedIndex={0}
          >
            <VerifyAccountTab />
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
        <Bottom
          display='flex'
          justifyContent='space-between'
        >
          <Box />
          <Button color='blue'>Continue</Button>
        </Bottom>
      </Right>
    </Box>
  );
};

export default Onboarding;
