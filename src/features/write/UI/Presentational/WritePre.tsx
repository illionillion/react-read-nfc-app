import type { ChangeEvent, FC } from 'react';
import { Layout } from '../../../../application/UI/Components/layout';
import { Box, Button, Container, Flex, List, ListItem, Text } from '@chakra-ui/react';
import { NotSupportedMessage } from '../../../../application/UI/Components/isSupported/NotSupportedMessage';
import { ContainerStyle } from './WritePre.css';
import { WritingModal } from '../Components/WritingModal';
import { AddModal } from '../Components/AddModal';
import { GrAddCircle } from 'react-icons/gr';
import { FiEdit } from 'react-icons/fi';
import { EditModal } from '../Components/EditModal';

interface WritePreProps {
  isSupported: boolean
  data: string
  isWriting: boolean
  isWritingModal: boolean
  isAddModalOpen: boolean
  isEditModalOpen: boolean
  isError: boolean
  writeData: NDEFRecordInit[]
  recordType: string
  url: string
  json: string
  editIndex: number
  handleToWrite: () => Promise<void>
  handleTextChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  handleSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void
  handleUrlChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleJsonChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  WritingModalClose: () => void
  AddModalOnOpen: () => void
  AddModalOnClose: () => void
  handleAddRecord: () => void
  handleDeleteRecord: (index: number) => void
  handleEditOpen: (index: number) => void
  handleEditRecord: (index: number) => void
  handleEditClose: () => void
}
export const WritePre: FC<WritePreProps> = ({
  writeData,
  isSupported,
  data,
  isWriting,
  isWritingModal,
  isAddModalOpen,
  isEditModalOpen,
  isError,
  recordType,
  url,
  json,
  editIndex,
  handleTextChange,
  handleDeleteRecord,
  handleUrlChange,
  handleToWrite,
  WritingModalClose,
  AddModalOnClose,
  AddModalOnOpen,
  handleAddRecord,
  handleSelectChange,
  handleJsonChange,
  handleEditOpen,
  handleEditRecord,
  handleEditClose,
}) => {
  return (
    <Layout>
      <Container css={ContainerStyle}>
        {
          isSupported ?
            <Box h='full'>
              <Flex justifyContent='center' paddingY={6} gap={5}>
                <Button leftIcon={<GrAddCircle />} onClick={AddModalOnOpen}>レコード追加</Button>
                <Button leftIcon={<FiEdit />} onClick={handleToWrite}>書き込む</Button>
              </Flex>
              <Text>レコード一覧</Text>
              <List>
                {writeData.map((item, index) => (
                  <ListItem key={index} display='flex'>
                    <Text overflowWrap='anywhere' flex={2} onClick={() => handleEditOpen(index)}>{
                      (()=>{
                        if (item.mediaType === 'application/json' && item.recordType === 'mime') {
                          const decoder = new TextDecoder();
                          return decoder.decode(item.data as ArrayBuffer | ArrayBufferView);
                        } else {
                          return item.data as string;
                        }
                      })()
                    }</Text>
                    <Button colorScheme='red' variant='outline' onClick={() => handleDeleteRecord(index)}>削除</Button>
                  </ListItem>
                ))}
                {writeData.length === 0 && <ListItem>レコードなし</ListItem>}
              </List>
              <AddModal
                isOpen={isAddModalOpen}
                url={url}
                recordType={recordType}
                data={data}
                json={json}
                handleSelectChange={handleSelectChange}
                handleUrlChange={handleUrlChange}
                handleTextChange={handleTextChange}
                handleJsonChange={handleJsonChange}
                handleAddRecord={handleAddRecord}
                onClose={AddModalOnClose}
              />
              <EditModal
                url={url}
                recordType={recordType}
                isOpen={isEditModalOpen}
                data={data}
                json={json}
                handleSelectChange={handleSelectChange}
                handleUrlChange={handleUrlChange}
                handleTextChange={handleTextChange}
                handleJsonChange={handleJsonChange}
                handleEditRecord={() => handleEditRecord(editIndex)}
                onClose={handleEditClose}
              />
              <WritingModal
                isWriting={isWriting}
                isWritingModal={isWritingModal}
                isError={isError}
                onClose={WritingModalClose}
              />
            </Box>
            :
            <NotSupportedMessage />
        }
      </Container>
    </Layout>
  );
};