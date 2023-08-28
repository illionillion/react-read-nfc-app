import type { ChangeEvent, FC } from 'react';
import { Layout } from '../../../../application/UI/Components/layout';
import { Box, Button, Container, Flex, Heading, List, ListItem, Text, Textarea } from '@chakra-ui/react';
import { NotSupportedMessage } from '../../../../application/UI/Components/isSupported/NotSupportedMessage';
import { ContainerStyle } from './WritePre.css';
import { WritingModal } from '../Components/WritingModal';

interface WritePreProps {
  isSupported: boolean
  data: string
  isWriting: boolean
  isWritingModal: boolean
  isError: boolean
  writeData: NDEFRecordInit[]
  handleToWrite: () => Promise<void>
  handleTextChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  WritingModalClose: () => void
  handleAddRecord: () => void
}
export const WritePre: FC<WritePreProps> = ({writeData, isSupported, data, isWriting, isWritingModal, isError, handleTextChange, handleToWrite, WritingModalClose, handleAddRecord }) => {
  return (
    <Layout>
      <Container css={ContainerStyle}>
        {
          isSupported ?
            <Box>
              <Heading>テキストを入力</Heading>
              <Textarea value={data} onChange={handleTextChange} />
              <Flex>
                <Button onClick={handleAddRecord}>レコード追加</Button>
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
              <WritingModal isWriting={isWriting} isWritingModal={isWritingModal} isError={isError} WritingModalClose={WritingModalClose} />
            </Box>
            :
            <NotSupportedMessage />
        }
      </Container>
    </Layout>
  );
};