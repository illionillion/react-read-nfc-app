import { Box, Button, Flex, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay, Spinner, Text } from '@chakra-ui/react';
import type { FC } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { LuSmartphoneNfc } from 'react-icons/lu';

interface WritingModalProps {
  isWriting: boolean
  isWritingModal: boolean
  isError: boolean
  onClose: () => void
}

export const WritingModal: FC<WritingModalProps> = ({ isWriting, isWritingModal, isError, onClose }) => {
  return (
    <Modal isCentered size='2xl' closeOnOverlayClick={false} isOpen={isWritingModal} onClose={onClose}>
      <ModalOverlay />
      <ModalContent h='2xs'>
        <ModalBody h='full' display='flex' justifyContent='center' alignItems='center'>
          {(isWriting && !isError) ? <Box display='flex' flexDir='column' justifyContent='center' alignItems='center' gap={3}>
            <Flex justifyContent='center' alignItems='center' gap={3}>
              <Text>書き込み中</Text>
              <IconContext.Provider value={{ size: '2rem' }}>
                <LuSmartphoneNfc />
              </IconContext.Provider>
            </Flex>
            <Spinner size='lg' />
          </Box> : <Flex justifyContent='center' alignItems='center' gap={3}>
            <Text>書き込み完了</Text>
            <IconContext.Provider value={{ size: '2rem' }}>
              <AiOutlineCheckCircle />
            </IconContext.Provider>
          </Flex>
          }
          {isError && <Text colorScheme='red'>書き込み失敗</Text>}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' isDisabled={isWriting} onClick={onClose}>
            閉じる
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};