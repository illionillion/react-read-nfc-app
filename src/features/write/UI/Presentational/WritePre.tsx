import type { FC } from 'react';
import { Layout } from '../../../../application/UI/Components/layout';
import { Container } from '@chakra-ui/react';
import { NotSupportedMessage } from '../../../../application/UI/Components/isSupported/NotSupportedMessage';
import { ContainerStyle } from './WritePre.css';

interface WritePreProps {
  isSupported: boolean
}
export const WritePre: FC<WritePreProps> = ({ isSupported }) => {
  return <Layout>
      <Container css={ContainerStyle}>
      {
        isSupported ?
        <>書き込み</>
          :
          <NotSupportedMessage />
      }
    </Container>
  </Layout>;
};