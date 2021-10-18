import styled from '@emotion/styled';
import css from '@emotion/css';

export const Button = styled.button`
  border: none;
  text-decoration: none;
  padding: 1.5rem 3rem;
  font-size: 14px;
  line-height: 22px;
  background: ${(props) =>
    props.theme.colors[props.color]};
  border-radius: 8px;
  color: ${({theme}) => theme.colors.white};
  font-weight: 500;
  cursor: pointer;

  ${({small}) =>
    small &&
    css`
      padding: 0.6rem 1.5rem;
      border-radius: 3.1px;
    `}
  ${({outline}) =>
    outline &&
    css`
      background: #e4e9ef;
      color: #a5b4cb;
    `}
`;
