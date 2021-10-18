import React, {useState} from 'react';
import Box from 'ui-box';
import styled from '@emotion/styled';
import LockIcon from 'components/atoms/icons/Lock';
import ArrowIcon from 'components/atoms/icons/Arrow';
import TickIcon from 'components/atoms/icons/Tick';
import LockAndKeyIcon from 'components/atoms/icons/LockAndKey';

const Container = styled.div`
  background: ${({theme}) =>
    theme.colors.collapse};
  padding: 3rem;
  line-height: 16px;
  border-radius: 5px;
`;
const QuestionText = styled.p`
  color: ${({theme}) => theme.colors.black};
  margin-left: 1rem;
  font-size: 12px;
  font-weight: 500;
`;
const HideText = styled.p`
  color: ${({theme}) => theme.colors.purple};
  font-size: 9px;
  margin-right: 0.5rem;
  line-height: 12px;
  font-weight: 500;
`;

const ButtomSection = styled.div`
  display: block;
  transition: all 0.5s ease-in-out;
`;
const BodyText = styled.p`
  color: ${({theme}) => theme.colors.black};
  opacity: 0.7;
  font-size: 11px;
  line-height: 14px;
  font-weight: normal;
  margin-bottom: 1rem;
  svg {
    margin-right: 1rem;
  }
`;

const Footer = styled.div`
  color: ${({theme}) => theme.colors.black};
  font-weight: normal;
  font-size: 11px;
  line-height: 15px;
  padding-top: 1.2rem;
  margin-top: 2rem;
  border-top: 1px solid #a5b4cb4d;
  svg {
    margin-right: 1rem;
  }
`;

export const Collapse = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  const toggleHide = () => {
    setIsOpen((v) => !v);
  };
  return (
    <Container>
      <Box>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
        >
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            marginBottom={
              isOpen ? '1rem' : '0rem'
            }
          >
            <LockIcon />
            <QuestionText>
              Why we need your BVN
            </QuestionText>
          </Box>
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            cursor='pointer'
            onClick={toggleHide}
          >
            <HideText>Hide</HideText>
            <ArrowIcon />
          </Box>
        </Box>
        {isOpen && (
          <ButtomSection>
            <BodyText>
              We only need access to your:
            </BodyText>
            <BodyText>
              <TickIcon />
              First Name
            </BodyText>
            <BodyText>
              <TickIcon />
              Phone Number
            </BodyText>
            <BodyText>
              <TickIcon />
              Date of Birth
            </BodyText>
            <Footer>
              <LockAndKeyIcon />
              Your BVN does not give us access to
              your bank accounts or transactions
            </Footer>
          </ButtomSection>
        )}
      </Box>
    </Container>
  );
};
