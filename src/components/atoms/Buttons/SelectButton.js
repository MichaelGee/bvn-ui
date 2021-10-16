import styled from '@emotion/styled';

export const SelectButton = styled.button`
  border: none;
  text-decoration: none;
  padding: 1rem 1.5rem;
  font-size: 14px;
  line-height: 22px;
  background: ${(props) =>
    props.active ? '#DCEAFF' : '#F5F6FA'};
  border: ${(props) =>
    props.active
      ? '1px solid #006AFF'
      : '1px solid rgba(20, 23, 55, 0.1)'};

  border-radius: 10px;
  color: ${({theme}) => theme.colors.black};
  font-weight: 500;
  cursor: pointer;
`;
