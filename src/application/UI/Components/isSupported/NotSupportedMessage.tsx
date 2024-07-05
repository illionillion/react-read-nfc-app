import { Box, Text } from '@chakra-ui/react';
import type { FC } from 'react';
import { IconContext } from 'react-icons';
import { MdSystemSecurityUpdateWarning } from 'react-icons/md';
import { IsSupportedMessageStyle } from './NotSupportedMessage.css';
import NotSupportedIcon from '../../../../../public/lottie/not-supported.json'
import { Player } from '@lottiefiles/react-lottie-player';

export const NotSupportedMessage: FC = () => {
  return <Box css={IsSupportedMessageStyle}>
    <Player
      autoplay
      loop
      src={NotSupportedIcon}
      style={{
        height: "250px",
        width: "250px",
        pointerEvents: "none",
      }}
    />
    <Text>お使いの端末では対応しておりません。</Text>
  </Box>;

};