import { Box, Text } from '@chakra-ui/react';
import { Player } from '@lottiefiles/react-lottie-player';
import type { FC } from 'react';
import NotSupportedIcon from '../../../../../public/lottie/not-supported.json';
import { IsSupportedMessageStyle } from './NotSupportedMessage.css';

export const NotSupportedMessage: FC = () => {
  return <Box css={IsSupportedMessageStyle}>
    <Player
      autoplay
      loop
      src={NotSupportedIcon}
      style={{
        height: '250px',
        width: '250px',
        pointerEvents: 'none',
      }}
    />
    <Text>お使いの端末では対応しておりません。</Text>
  </Box>;

};