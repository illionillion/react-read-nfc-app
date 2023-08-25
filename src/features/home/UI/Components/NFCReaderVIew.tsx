import { Box, Link, Text } from '@chakra-ui/react';
import type { FC } from 'react';
import { IsSupportedMessageStyle } from '../Presentational/HomePre.css';
import { IconContext } from 'react-icons';
import { FcNfcSign } from 'react-icons/fc';

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
              {records.map(item => {
                if (item.recordType === 'text') {
                  const textDecoder = new TextDecoder(item.encoding);
                  const text = textDecoder.decode(item.data);
                  return <Text>{`Text: ${text}`}</Text>;
                } else if(item.recordType === 'url') {
                  const textDecoder = new TextDecoder();
                  const text = textDecoder.decode(item.data);
                  return <Text>URL:<Link href={text}>{text}</Link></Text>;
                } else {
                  return <Text>変換不可</Text>;
                }
              })}
            </Box>
          }
        </> :
        <Box css={IsSupportedMessageStyle}>
          <IconContext.Provider value={{ size: '3rem' }}>
            <FcNfcSign />
          </IconContext.Provider>
          <Text>NFCを近づけてください。</Text>
        </Box>
    }
  </>;
};