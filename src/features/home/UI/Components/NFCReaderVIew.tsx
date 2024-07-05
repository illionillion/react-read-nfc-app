import { Box, Text } from '@chakra-ui/react';
import { Player } from '@lottiefiles/react-lottie-player';
import type { FC } from 'react';
import NFCAnimation from '../../../../../public/lottie/nfc-animation.json';
import { IsSupportedMessageStyle } from '../../../../application/UI/Components/isSupported/NotSupportedMessage.css';
import { ViewList } from './ViewList';

interface NFCReaderViewProps {
  isRead: boolean
  isReadFailed: boolean
  errorMessage: string
  NFCserialNumber: string
  records: readonly NDEFRecord[]
}

export const NFCReaderView: FC<NFCReaderViewProps> = ({ isRead, isReadFailed, errorMessage, NFCserialNumber, records }) => {
  return <>
    {
      isRead ?
        <>
          {isReadFailed ? errorMessage :
            <Box h='full'>
              <Text py={5}>シリアルナンバー：{NFCserialNumber}</Text>
              {records.map((item, index) => <ViewList key={index} item={item} />)}
            </Box>
          }
        </> :
        <Box css={IsSupportedMessageStyle}>
          <Player
            autoplay
            loop
            src={NFCAnimation}
            style={{
              height: '250px',
              width: '250px',
              pointerEvents: 'none',
            }}
          />
          <Text>NFCを近づけてください。</Text>
        </Box>
    }
  </>;
};