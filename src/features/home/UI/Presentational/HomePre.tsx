import type { FC, MouseEventHandler } from 'react';
import { Layout } from '../../../../application/UI/Components/layout';
import { NotSupportedMessage } from '../Components/NotSupportedMessage';
import { Button, Container } from '@chakra-ui/react';
import { ContainerStyle } from './HomePre.css';
import { NFCReaderView } from '../Components/NFCReaderVIew';
import { MdNfc } from 'react-icons/md';

interface HomePreProps {
  isSupported: boolean
  isReadStarted: boolean
  isRead: boolean
  isReadFailed: boolean
  errorMessage: string
  NFCserialNumber: string
  records: readonly NDEFRecord[]
  handleReadStart: MouseEventHandler<HTMLButtonElement>
}

export const HomePre: FC<HomePreProps> = ({ isSupported, isRead, isReadStarted, isReadFailed, errorMessage, NFCserialNumber, records, handleReadStart }) => {
  return (
    <>
      <Layout>
        <Container css={ContainerStyle}>
          {
            isSupported ?
              !isReadStarted ? <><Button colorScheme='teal' rightIcon={<MdNfc />} onClick={handleReadStart}>読み取り開始</Button></> : <NFCReaderView {...{ isRead, isReadFailed, errorMessage, NFCserialNumber, records }} />
              :
              <NotSupportedMessage />
          }
        </Container>
      </Layout>
    </>
  );
};