import React from 'react';
import Box from 'ui-box';
import KaratIcon from '../icons/Karat';
import styled from '@emotion/styled';

const Selector = styled.select`
  -webkit-appearance: none;
  width: 100%;
  outline: none;
  border: 1px solid
    ${({theme}) => theme.colors.gray02};
  padding: 12px 5rem 12px 3rem;
  cursor: pointer;
  border-radius: 12px;
  font-size: 1.5rem;
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
      position='relative'
      cursor='pointer'
      width='100%'
    >
      <Box display='flex' flexDirection='column'>
        <Title>{title}</Title>
        <Selector>{children}</Selector>
      </Box>
      <Box
        color='default'
        position='absolute'
        top='40%'
        right='8px'
        paddingX='1.3rem'
        cursor='pointer'
      >
        <KaratIcon />
      </Box>
    </Box>
  );
};
