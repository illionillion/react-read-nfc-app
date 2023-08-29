import { Button, Heading, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay, Textarea } from '@chakra-ui/react';
import type { ChangeEvent, FC } from 'react';

interface AddModalProps {
    isAddModalOpen: boolean
    data: string
    AddModalOnClose(): void
    handleTextChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    handleAddRecord: () => void
}

export const AddModal: FC<AddModalProps> = ({
  isAddModalOpen,
  data,
  handleTextChange,
  AddModalOnClose,
  handleAddRecord
}) => <Modal isCentered size='2xl' closeOnOverlayClick={false} isOpen={isAddModalOpen} onClose={AddModalOnClose}>
  <ModalOverlay />
  <ModalContent h='3xs'>
    <ModalBody h='full' display='flex' flexDir='column' justifyContent='center' alignItems='center'>
      <Heading>テキストを入力</Heading>
      <Textarea value={data} onChange={handleTextChange} />
    </ModalBody>
    <ModalFooter>
      <Button colorScheme='red' onClick={AddModalOnClose}>閉じる</Button>
      <Button colorScheme="green" onClick={handleAddRecord}>追加</Button>
    </ModalFooter>
  </ModalContent>
</Modal>;