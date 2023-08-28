import type { ChangeEvent, FC } from 'react';
import { Layout } from '../../../../application/UI/Components/layout';
import { Box, Button, Container, Heading, Textarea } from '@chakra-ui/react';
import { NotSupportedMessage } from '../../../../application/UI/Components/isSupported/NotSupportedMessage';
import { ContainerStyle } from './WritePre.css';
import { WritingModal } from '../Components/WritingModal';

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
              <WritingModal isWriting={isWriting} isWritingModal={isWritingModal} isError={isError} WritingModalClose={WritingModalClose} />
            </Box>
            :
            <NotSupportedMessage />
        }
      </Container>
    </Layout>
  );
};