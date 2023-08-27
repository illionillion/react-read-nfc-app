import type { ChangeEvent, FC } from 'react';
import { useState } from 'react';
import { WritePre } from '../Presentational/WritePre';
import { isNFCSupported } from '../../../../application/lib/IsNFCSupported';
import { useBoolean } from '@chakra-ui/react';

export const WriteCon: FC = () => {
  const [isSupported,] = useState<boolean>(isNFCSupported());
  const [data, setData] = useState<string>('');
  const [isWriting, setIsWriting] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isWritingModal,{ on: WritingModalOpen, off: WritingModalClose}] = useBoolean();
  const handleTextChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
    setData(e.currentTarget.value);
  };

  const handleToWrite = async() => {
    try {
      setIsWriting(true);
      setIsError(false);
      WritingModalOpen();
      const writer = new NDEFReader();
      await writer.write(data);
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsWriting(false);
    }
  };

  return <WritePre isError={isError} isSupported={isSupported} isWritingModal={isWritingModal}  data={data} isWriting={isWriting} handleTextChange={handleTextChange} handleToWrite={handleToWrite}WritingModalClose={WritingModalClose} />;
};