import type { ChangeEvent, FC } from 'react';
import { Layout } from '../../../../application/UI/Components/layout';
import { Box, Button, Container, Heading, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay, Spinner, Text, Textarea } from '@chakra-ui/react';
import { NotSupportedMessage } from '../../../../application/UI/Components/isSupported/NotSupportedMessage';
import { ContainerStyle } from './WritePre.css';

interface WritePreProps {
  isSupported: boolean
  data: string
  isWriting: boolean
  isWritingModal: boolean
  isError: boolean
  handleToWrite: () => Promise<void>
  handleTextChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  WritingModalClose: () => void
}
export const WritePre: FC<WritePreProps> = ({ isSupported, data, isWriting, isWritingModal, isError, handleTextChange, handleToWrite, WritingModalClose }) => {
  return (
    <Layout>
      <Container css={ContainerStyle}>
        {
          isSupported ?
            <Box>
              <Heading>テキストを入力</Heading>
              <Textarea value={data} onChange={handleTextChange} />
              <Button onClick={handleToWrite}>書き込む</Button>
              <Modal isCentered size='2xl' closeOnOverlayClick={false} isOpen={isWritingModal} onClose={WritingModalClose}>
                <ModalOverlay />
                <ModalContent h='2xs'>
                  <ModalBody h='full' display='flex' justifyContent='center' alignItems='center'>
                    {isWriting ? <Box display='flex' flexDir='column' justifyContent='center' alignItems='center' gap={3}>
                      <Text>書き込み中</Text>
                      <Spinner size='lg' />
                    </Box> : <Text>書き込み完了</Text>
                    }
                    {isError && <Text colorScheme='red'>書き込み失敗</Text>}
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme='blue' isDisabled={isWriting} onClick={WritingModalClose}>
                      閉じる
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
            :
            <NotSupportedMessage />
        }
      </Container>
    </Layout>
  );
};