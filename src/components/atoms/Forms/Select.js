import React from 'react';
import Box from 'ui-box';
import KaratIcon from '../icons/Karat';
import styled from '@emotion/styled';

const Selector = styled.select`
  padding: 2rem 1rem;
  -webkit-appearance: none;
  width: 100%;
  flex: 1;
  line-height: 16px;
  outline: none;
  border: 1px solid #c1c4d6;
  padding-left: 26px;
  padding-right: 53px;
  cursor: pointer;
  border-radius: 12px;
  font-size: 12px;
`;

const Title = styled.p`
  margin-bottom: 0.5rem;
  color: ${({theme}) => theme.colors.black};
  font-size: 12px;
  font-weight: 500;
`;

export const Select = ({children, title}) => {
  return (
    <Box
      display='inline-flex'
      flex={1}
      position='relative'
      width='auto'
      cursor='pointer'
    >
      <Box display='flex' flexDirection='column'>
        <Title>{title}</Title>
        <Selector>{children}</Selector>
      </Box>
      <Box
        color='default'
        position='absolute'
        top='50%'
        right='8px'
        paddingX='1.3rem'
        cursor='pointer'
      >
        <KaratIcon />
      </Box>
    </Box>
  );
};
