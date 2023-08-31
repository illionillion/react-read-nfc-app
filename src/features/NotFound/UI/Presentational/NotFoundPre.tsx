import type { FC } from 'react';
import { Layout } from '../../../../application/UI/Components/layout';
import { Container, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { NotFoundContainer } from './NotFound.css';

export const NotFoundPre: FC = () => {
  return (
    <Layout>
      <Container css={NotFoundContainer}>
        <Text>ページが見つかりません。</Text>
        <Link to='/' style={{color: 'skyblue', textDecoration: 'underline'}}>トップへ戻る</Link>
      </Container>
    </Layout>
  );
};