import { Box, Link, Text } from '@chakra-ui/react';
import type { FC } from 'react';
import { IconContext } from 'react-icons';
import { LuSmartphoneNfc } from 'react-icons/lu';
import { IsSupportedMessageStyle } from '../../../../application/UI/Components/isSupported/NotSupportedMessage.css';

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
                  return <Text key={item.id}>{`Text: ${text}`}</Text>;
                } else if(item.recordType === 'url') {
                  const textDecoder = new TextDecoder();
                  const text = textDecoder.decode(item.data);
                  return <Text key={item.id}>URL: <Link isExternal href={text} color='teal.500'>{text}</Link></Text>;
                } else {
                  return <Text key={item.id}>変換不可</Text>;
                }
              })}
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