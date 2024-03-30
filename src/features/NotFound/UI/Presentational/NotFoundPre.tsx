import { Container, Text, Link as ChakraLink } from '@chakra-ui/react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../../../../application/UI/Components/layout';
import { NotFoundContainer } from './NotFound.css';

export const NotFoundPre: FC = () => {
  return (
    <Layout>
      <Container css={NotFoundContainer}>
        <Text>ページが見つかりません。</Text>
        <ChakraLink as={Link} to='/' color="skyblue" textDecoration="underline">トップへ戻る</ChakraLink>
      </Container>
    </Layout>
  );
};