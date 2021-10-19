import styled from '@emotion/styled';
import {css, keyframes} from '@emotion/react';
import Box from 'ui-box';

const inset = keyframes`
  0% {
    -webkit-box-shadow: inset 0 0 0 0 rgba(238, 82, 83, 0);
            box-shadow: inset 0 0 0 0 rgba(238, 82, 83, 0);
  }
  100% {
    -webkit-box-shadow: inset 0 0 14px 0px rgba(238, 82, 83, 0.95);
            box-shadow: inset 0 0 14px 0px rgba(238, 82, 83, 0.95);
  }
`;

export const TabHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StylizedTab = styled.button`
  color: #fff;
  width: 100%;
  padding: 20px 0px;
  font-size: 1.25rem;
  background-color: transparent;
  border: none;
  border-bottom-color: #393e46;
  cursor: ${(p) =>
    p.disabled ? 'default' : 'pointer'};
  ${(p) =>
    p.active &&
    css`
      color: #feca57;
      font-weight: bold;
      animation: ${inset} 0.4s
        cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    `}
  ${(p) => !p.active && p.inactiveStyle}
`;

export const StyledTabPanel = styled.div`
  display: ${(p) => (p.active ? 'flex' : 'none')};
  font-size: 4rem;
  background: ${({theme}) => theme.colors.white};
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const TabsHolder = styled.div`
  display: flex;
  /* can be used to stack them vertically by using column*/
  flex-direction: row;
`;

export const inactiveTab = {
  opacity: 0.65,
};

export const TabSlider = styled.div`
  width: ${(props) => `${props.width}px`};
  height: 4px;
  background-color: #feca57;
  transition: 0.2s;
  transform: ${(props) =>
    `translateX(${props.width * props.index}px)`};
`;

export const TabTitle = styled.p`
  color: ${(props) =>
    props.active ? '#141737' : '#A5B4CB'};
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  margin-left: 1rem;
  ${({theme}) => theme.mq.lg`
  font-size: 13px;
`}
  ${({theme}) => theme.mq.md`
   font-size: 10px;
`}
`;

export const TabBox = styled(Box)`
  margin-right: 5rem;
  ${({theme}) => theme.mq.lg`
   margin-right: 4rem;
`}
`;
