import { Container, Text, Link as ChakraLink } from '@chakra-ui/react';
import { Player } from '@lottiefiles/react-lottie-player';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import NotFoundAnimation from '../../../../../public/lottie/not-found.json';
import { Layout } from '../../../../application/UI/Components/layout';
import { NotFoundContainer } from './NotFound.css';

export const NotFoundPre: FC = () => {
  return (
    <Layout>
      <Container css={NotFoundContainer}>
        <Player
          autoplay
          loop
          src={NotFoundAnimation}
          style={{
            height: '250px',
            width: '250px',
            pointerEvents: 'none',
          }}
        />
        <Text>ページが見つかりません。</Text>
        <ChakraLink as={Link} to='/' color="skyblue" textDecoration="underline">トップへ戻る</ChakraLink>
      </Container>
    </Layout>
  );
};