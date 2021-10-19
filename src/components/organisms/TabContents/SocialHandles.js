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

export const SocialHandles = () => {
  return (
    <Box marginBottom='4.5rem'>
      <Title>
        Enter your business social media handles
      </Title>
      <Box width='45%' marginBottom='4rem'>
        <Input
          placeholder='@'
          title='Choose your Abeg Tag (required)'
        />
      </Box>
      <Box
        display='flex'
        justifyContent='space-between'
      >
        <Box width='100%' marginRight='10rem'>
          <Input
            placeholder='@'
            title='Instagram'
          />
        </Box>
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
