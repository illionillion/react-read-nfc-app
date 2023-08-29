import type { FC } from 'react';
import { Layout } from '../../../../application/UI/Components/layout';
import { Container, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const NotFoundPre: FC = () => {
  return (
    <Layout>
      <Container display='flex' flexDir='column' alignItems='center' justifyContent='center' h='100svh'>
        <Text>ページが見つかりません。</Text>
        <Link to='/' style={{color: 'skyblue', textDecoration: 'underline'}}>トップへ戻る</Link>
      </Container>
    </Layout>
  );
};