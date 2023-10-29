import type { ChangeEvent, FC } from 'react';
import { Layout } from '../../../../application/UI/Components/layout';
import { Box, Button, Container, Flex, List, ListItem, Text } from '@chakra-ui/react';
import { NotSupportedMessage } from '../../../../application/UI/Components/isSupported/NotSupportedMessage';
import { ContainerStyle } from './WritePre.css';
import { WritingModal } from '../Components/WritingModal';
import { AddModal } from '../Components/AddModal';
import { GrAddCircle } from 'react-icons/gr';
import { FiEdit } from 'react-icons/fi';

interface WritePreProps {
  isSupported: boolean
  data: string
  isWriting: boolean
  isWritingModal: boolean
  isAddModalOpen: boolean
  isError: boolean
  writeData: NDEFRecordInit[]
  recordType: string
  url: string
  json: string
  handleToWrite: () => Promise<void>
  handleTextChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  WritingModalClose: () => void
  AddModalOnOpen: () => void
  AddModalOnClose: () => void
  handleAddRecord: () => void
  handleSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void
  handleUrlChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleJsonChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}
export const WritePre: FC<WritePreProps> = ({
  writeData,
  isSupported,
  data,
  isWriting,
  isWritingModal,
  isAddModalOpen,
  isError,
  recordType,
  url,
  json,
  handleTextChange,
  handleUrlChange,
  handleToWrite,
  WritingModalClose,
  AddModalOnClose,
  AddModalOnOpen,
  handleAddRecord,
  handleSelectChange,
  handleJsonChange,
}) => {
  return (
    <Layout>
      <Container css={ContainerStyle}>
        {
          isSupported ?
            <Box>
              <Flex justifyContent='center' paddingY={6} gap={5}>
                <Button leftIcon={<GrAddCircle />} onClick={AddModalOnOpen}>レコード追加</Button>
                <Button leftIcon={<FiEdit />} onClick={handleToWrite}>書き込む</Button>
              </Flex>
              <Text>レコード一覧</Text>
              <List>
                {writeData.map((item, index) => (
                  <ListItem key={index}>
                    <Text overflowWrap='anywhere'>{
                      (()=>{
                        if (item.mediaType === 'application/json' && item.recordType === 'mime') {
                          const decoder = new TextDecoder();
                          return decoder.decode(item.data as ArrayBuffer | ArrayBufferView);
                        } else {
                          return item.data as string;
                        }
                      })()
                    }</Text>
                  </ListItem>
                ))}
                {writeData.length === 0 && <ListItem>レコードなし</ListItem>}
              </List>
              <AddModal
                url={url}
                recordType={recordType}
                isAddModalOpen={isAddModalOpen}
                data={data}
                json={json}
                handleSelectChange={handleSelectChange}
                handleUrlChange={handleUrlChange}
                handleTextChange={handleTextChange}
                AddModalOnClose={AddModalOnClose}
                handleAddRecord={handleAddRecord}
                handleJsonChange={handleJsonChange}
              />
              <WritingModal
                isWriting={isWriting}
                isWritingModal={isWritingModal}
                isError={isError}
                WritingModalClose={WritingModalClose}
              />
            </Box>
            :
            <NotSupportedMessage />
        }
      </Container>
    </Layout>
  );
};