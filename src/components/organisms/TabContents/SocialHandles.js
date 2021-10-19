import styled from '@emotion/styled';
import Box from 'ui-box';
import {Input} from 'components/atoms/Forms/Input';

const Title = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${({theme}) => theme.colors.gray04};
  margin-bottom: 4rem;
  margin-top: 1rem;
`;

const Instagram = styled(Box)`
  margin-right: 10rem;
  ${({theme}) => theme.mq.md`
    margin-right: 1rem;
  `}
`;

const Abeg = styled(Box)`
  width: 45%;
  ${({theme}) => theme.mq.md`
    width: 100%;
  `}
`;

export const SocialHandles = () => {
  return (
    <Box marginBottom='4.5rem'>
      <Title>
        Enter your business social media handles
      </Title>
      <Abeg width='45%' marginBottom='4rem'>
        <Input
          placeholder='@'
          title='Choose your Abeg Tag (required)'
        />
      </Abeg>
      <Box
        display='flex'
        justifyContent='space-between'
      >
        <Instagram width='100%'>
          <Input
            placeholder='@'
            title='Instagram'
          />
        </Instagram>
        <Box width='100%'>
          <Input
            placeholder='@'
            title='Twitter'
          />
        </Box>
      </Box>
    </Box>
  );
};
