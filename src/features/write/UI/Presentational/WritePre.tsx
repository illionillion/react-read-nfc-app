import type { ChangeEvent, FC } from 'react';
import { Layout } from '../../../../application/UI/Components/layout';
import { Box, Button, Container, Flex, List, ListItem, Text } from '@chakra-ui/react';
import { NotSupportedMessage } from '../../../../application/UI/Components/isSupported/NotSupportedMessage';
import { ContainerStyle } from './WritePre.css';
import { WritingModal } from '../Components/WritingModal';
import { AddModal } from '../Components/AddModal';

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
  handleToWrite: () => Promise<void>
  handleTextChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  WritingModalClose: () => void
  AddModalOnOpen: () => void
  AddModalOnClose: () => void
  handleAddRecord: () => void
  handleSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void
  handleUrlChange: (e: ChangeEvent<HTMLInputElement>) => void
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
  handleTextChange,
  handleUrlChange,
  handleToWrite,
  WritingModalClose,
  AddModalOnClose,
  AddModalOnOpen,
  handleAddRecord,
  handleSelectChange
}) => {
  return (
    <Layout>
      <Container css={ContainerStyle}>
        {
          isSupported ?
            <Box>
              <Flex justifyContent='center' paddingY={6} gap={5}>
                <Button onClick={AddModalOnOpen}>レコード追加</Button>
                <Button onClick={handleToWrite}>書き込む</Button>
              </Flex>
              <Text>レコード一覧</Text>
              <List>
                {writeData.map((item, index) => (
                  <ListItem key={index}>
                    <Text>{item.data as string}</Text>
                  </ListItem>
                ))}
                {writeData.length === 0 && <ListItem>レコードなし</ListItem>}
              </List>
              <AddModal
                url={url}
                recordType={recordType}
                isAddModalOpen={isAddModalOpen}
                data={data}
                handleSelectChange={handleSelectChange}
                handleUrlChange={handleUrlChange}
                handleTextChange={handleTextChange}
                AddModalOnClose={AddModalOnClose}
                handleAddRecord={handleAddRecord}
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