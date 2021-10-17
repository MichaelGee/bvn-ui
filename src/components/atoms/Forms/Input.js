import React from 'react';
import styled from '@emotion/styled';
import Box from 'ui-box';

const InputComponent = styled.input`
  width: auto;
  border: 1px solid
    ${({theme}) => theme.colors.gray02};
  padding: 16px 17px;
  border-radius: 12px;
  color: ${({theme}) => theme.colors.black};
  &:focus {
    border: 1px solid
      ${({theme}) => theme.colors.blue};
  }
`;

const Title = styled.p`
  margin-bottom: 0.5rem;
  color: ${({theme}) => theme.colors.black};
  font-size: 12px;
  font-weight: 500;
`;

export const Input = ({placeholder, title}) => {
  return (
    <Box>
      <Title>{title}</Title>
      <InputComponent placeholder={placeholder} />
    </Box>
  );
};
