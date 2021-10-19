import React, {useState} from 'react';
import Box from 'ui-box';
import {Select} from 'components/atoms/Forms/Select';
import {SelectButton} from 'components/atoms/Buttons/SelectButton';
import styled from '@emotion/styled';

const Title = styled.p`
  margin-bottom: 0.5rem;
  color: ${({theme}) => theme.colors.black};
  font-size: 12px;
  font-weight: 500;
`;

export const BusinessCategory = () => {
  const [isactive, setIsActive] = useState(false);
  const toggleActive = () => {
    setIsActive((v) => !v);
  };
  return (
    <Box marginBottom='4.5rem'>
      <Box
        display='flex'
        justifyContent='space-between'
        marginTop='5rem'
      >
        <Box width='100%' marginRight='10rem'>
          <Select title='Type of your business'>
            <option
              value='Select a bank'
              defaultValue=''
            ></option>
            <option value='sole'>
              Sole Proprietorship
            </option>
            <option value='partnership'>
              Partnership
            </option>
            <option value='corporation'>
              Corporation
            </option>
            <option value='lcc'>
              Limited Liability Company (LLC)
            </option>
            <option value='cooperative'>
              Cooperative (Co-op)
            </option>
          </Select>
        </Box>
        <Box width='100%'>
          <Select title='Business Category'>
            <option
              value='Select a bank'
              defaultValue=''
            ></option>
            <option value='retailer'>
              Retailer
            </option>
            <option value='food-service'>
              Food Service
            </option>
            <option value='manufacturer'>
              Manufacturer
            </option>
            <option value='food-service'>
              Food Service
            </option>
            <option value='health-practitioner'>
              Health Practitioner
            </option>
          </Select>
        </Box>
      </Box>
      <Box marginTop='4rem'>
        <Title>
          Do you use POS machines for your
          business?
        </Title>
        <Box display='flex' marginTop='1rem'>
          <Box marginRight='2rem'>
            <SelectButton
              active={!isactive}
              onClick={toggleActive}
            >
              Yes
            </SelectButton>
          </Box>
          <Box>
            <SelectButton
              active={isactive}
              onClick={toggleActive}
            >
              No
            </SelectButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
