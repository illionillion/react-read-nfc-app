import { Box, Button, HStack, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay, Select, Text, Textarea } from '@chakra-ui/react';
import type { ChangeEvent, FC } from 'react';

interface AddModalProps {
    isAddModalOpen: boolean
    data: string
    recordType: string
    url: string
    json: string
    AddModalOnClose(): void
    handleTextChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    handleUrlChange: (e: ChangeEvent<HTMLInputElement>) => void
    handleAddRecord: () => void
    handleSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void
    handleJsonChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export const AddModal: FC<AddModalProps> = ({
  isAddModalOpen,
  data,
  recordType,
  url,
  json,
  handleUrlChange,
  handleSelectChange,
  handleTextChange,
  AddModalOnClose,
  handleAddRecord,
  handleJsonChange,
}) => <Modal isCentered size='3xl' closeOnOverlayClick={false} isOpen={isAddModalOpen} onClose={AddModalOnClose}>
  <ModalOverlay />
  <ModalContent h='md'>
    <ModalBody h='full' display='flex' gap={5} flexDir='column' justifyContent='center' alignItems='center'>
      <Box w='full'>
        <Text as='label' htmlFor='SelectType'>形式を選択</Text>
        <Select id='SelectType' value={recordType} onChange={handleSelectChange}>
          <option value="text">テキスト</option>
          <option value="url">URL</option>
          <option value="json">JSON</option>
          <option value="image">画像</option>
        </Select>
      </Box>
      {
        (() => {
          switch (recordType) {
            case 'text':
              return (
                <Box w='full'>
                  <Text as='label' htmlFor='InputText'>テキストを入力</Text>
                  <Textarea id='InputText' value={data} onChange={handleTextChange} />
                </Box>
              );
            case 'url':
              return (
                <Box w='full'>
                  <Text as='label' htmlFor='InputText'>リンクを入力</Text>
                  <Input id='InputText' value={url} type='url' onChange={handleUrlChange} />
                </Box>
              );
            case 'json':
              return (
                <Box w='full'>
                  <Text as='label' htmlFor='InputText'>JSONを入力</Text>
                  <Textarea id='InputText' value={json} onChange={handleJsonChange} />
                </Box>
              );
            case 'image':
              return (
                <Box w='full'>
                  <Text as='label' htmlFor='InputText'>画像を入力</Text>
                  <Input id='InputText' value={url} type='file' onChange={handleUrlChange} accept='image/*' />
                </Box>
              );
            default:
              return (
                <Box w='full'>
                  <Text as='label' htmlFor='InputText'>テキストを入力</Text>
                  <Textarea id='InputText' value={data} onChange={handleTextChange} />
                </Box>
              );
          }
        })()
      }
    </ModalBody>
    <ModalFooter>
      <HStack spacing={2}>
        <Button colorScheme='red' onClick={AddModalOnClose}>閉じる</Button>
        <Button colorScheme="green" onClick={handleAddRecord}>追加</Button>
      </HStack>
    </ModalFooter>
  </ModalContent>
</Modal>;