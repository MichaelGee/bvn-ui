import React, {useState} from 'react';
import {
  Tabs,
  ButtonTab,
  TabPanel,
} from '../Tabs/Tabs';
import styled from '@emotion/styled';
import {Collapse} from 'components/molecules/Collapse/Collapse';
import Box from 'ui-box';
import {Input} from 'components/atoms/Forms/Input';
import {Select} from 'components/atoms/Forms/Select';

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.8rem 0;
`;

const Title = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  color: ${({theme}) => theme.colors.black};
  margin-bottom: 0.5rem;
`;

const CollapseContainer = styled(Box)`
  margin-bottom: 5rem;
  ${({theme}) => theme.mq.md`
  margin-bottom: 2rem;
`}
`;

const TabPanelContainer = styled.div``;

export const VerifyAccountTab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleChange = (e, value) => {
    setActiveTab(value);
  };
  return (
    <Box>
      <TabsContainer>
        <Title>
          Select a verification method
        </Title>
        <Tabs
          selectedTab={activeTab}
          onChange={handleChange}
        >
          <ButtonTab text='BVN' value={0} />
          <ButtonTab
            text='Personal Account Number'
            value={1}
          />
        </Tabs>
      </TabsContainer>
      <TabPanelContainer>
        <TabPanel
          value={activeTab}
          selectedIndex={0}
        >
          <Input
            type='number'
            title='Bank Verification Number (11-digits)'
          />
        </TabPanel>
        <TabPanel
          value={activeTab}
          selectedIndex={1}
        >
          <Box
            display='flex'
            justifyContent='space-between'
          >
            <Box width='80%' marginRight='10rem'>
              <Input
                type='number'
                title='Account Number'
              />
            </Box>
            <Box width='80%'>
              <Select title='Select Bank'>
                <option
                  value='Select a bank'
                  defaultValue=''
                ></option>
                <option value='gtbank'>
                  GtBank
                </option>
                <option value='acccess'>
                  Access Bank
                </option>
              </Select>
            </Box>
          </Box>
        </TabPanel>
      </TabPanelContainer>
      <CollapseContainer marginTop='3rem'>
        <Collapse />
      </CollapseContainer>
    </Box>
  );
};
