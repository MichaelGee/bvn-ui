import React, {useState, useEffect} from 'react';
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
import {
  validateBVN,
  validateAccNumber,
} from '../../../util';

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
  const [account, setAccount] = useState('');
  const [bvn, setBvn] = useState('');
  const [
    accountError,
    setAccountError,
  ] = useState(false);
  const [bvnError, setBvnError] = useState(false);

  const onAccountChange = (e) => {
    e.preventDefault();
    setAccount(e.target.value);
  };

  const onBVNChange = (e) => {
    e.preventDefault();
    setBvn(e.target.value);
  };

  const handleChange = (e, value) => {
    setActiveTab(value);
  };

  const validateBVNNumber = () => {
    if (bvn.length > 0 && !validateBVN(bvn)) {
      setBvnError(true);
    } else {
      setBvnError(false);
    }
  };

  const validateAccount = () => {
    if (
      bvn.length > 0 &&
      !validateAccNumber(account)
    ) {
      setAccountError(true);
    } else {
      setAccountError(false);
    }
  };

  useEffect(() => {
    validateBVNNumber();
    // eslint-disable-next-line
  }, [bvn]);
  useEffect(() => {
    validateAccount();
    // eslint-disable-next-line
  }, [account]);

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
            error={bvnError}
            type='number'
            title='Bank Verification Number (11-digits)'
            value={bvn}
            onChange={onBVNChange}
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
                error={accountError}
                type='number'
                title='Account Number'
                value={account}
                onChange={onAccountChange}
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
