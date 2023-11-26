import { Box, Button, HStack, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay, Select, Text } from '@chakra-ui/react';
import type { ChangeEvent, FC } from 'react';
import { JsonInput, LinkInput, TextInput } from './TextInputs';

interface AddModalProps {
    isOpen: boolean
    data: string
    recordType: string
    url: string
    json: string
    onClose: () => void
    handleTextChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    handleUrlChange: (e: ChangeEvent<HTMLInputElement>) => void
    handleAddRecord: () => void
    handleSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void
    handleJsonChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export const AddModal: FC<AddModalProps> = ({
  isOpen,
  data,
  recordType,
  url,
  json,
  handleUrlChange,
  handleSelectChange,
  handleTextChange,
  onClose,
  handleAddRecord,
  handleJsonChange,
}) => <Modal isCentered size='3xl' closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent h='md'>
    <ModalBody h='full' display='flex' gap={5} flexDir='column' justifyContent='center' alignItems='center'>
      <Box w='full'>
        <Text as='label' htmlFor='SelectType'>形式を選択</Text>
        <Select id='SelectType' value={recordType} onChange={handleSelectChange}>
          <option value="text">テキスト</option>
          <option value="url">URL</option>
          <option value="json">JSON</option>
        </Select>
      </Box>
      {
        (() => {
          switch (recordType) {
            case 'text':
              return <TextInput data={data} onChange={handleTextChange}/>;
            case 'url':
              return <LinkInput  url={url} onChange={handleUrlChange}/>;
            case 'json':
              return <JsonInput json={json} onChange={handleJsonChange} />;
            default:
              return <TextInput data={data} onChange={handleTextChange}/>;
          }
        })()
      }
    </ModalBody>
    <ModalFooter>
      <HStack spacing={2}>
        <Button colorScheme='red' onClick={onClose}>閉じる</Button>
        <Button colorScheme="green" onClick={handleAddRecord}>追加</Button>
      </HStack>
    </ModalFooter>
  </ModalContent>
</Modal>;