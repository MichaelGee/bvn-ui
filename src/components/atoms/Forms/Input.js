import React from 'react';
import styled from '@emotion/styled';
import Box from 'ui-box';
import css from '@emotion/css';

const InputComponent = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid
    ${({theme}) => theme.colors.gray02};
  padding: 12px 17px;
  border-radius: 12px;
  font-weight: 400;
  line-height: 22px;
  font-size: 1.5rem;
  color: ${({theme}) => theme.colors.gray04};
  ${({error}) =>
    error &&
    css`
      border: 1px solid #ff6774;
    `}
`;

const Title = styled.p`
  margin-bottom: 0.5rem;
  color: ${({theme}) => theme.colors.black};
  font-size: 12px;
  font-weight: 500;
`;

export const Input = ({
  placeholder,
  title,
  type,
  error,
  onChange,
  props,
}) => {
  return (
    <Box width='100%'>
      <Title>{title}</Title>
      <InputComponent
        error={error}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    </Box>
  );
};
