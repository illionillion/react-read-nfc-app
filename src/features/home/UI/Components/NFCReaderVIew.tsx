import { Box, Text } from '@chakra-ui/react';
import type { FC } from 'react';
import { IconContext } from 'react-icons';
import { LuSmartphoneNfc } from 'react-icons/lu';
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
            <Box>
              <Text>シリアルナンバー：{NFCserialNumber}</Text>
              {records.map((item, index) => <ViewList key={index} item={item} />)}
            </Box>
          }
        </> :
        <Box css={IsSupportedMessageStyle}>
          <IconContext.Provider value={{ size: '3rem' }}>
            <LuSmartphoneNfc />
          </IconContext.Provider>
          <Text>NFCを近づけてください。</Text>
        </Box>
    }
  </>;
};