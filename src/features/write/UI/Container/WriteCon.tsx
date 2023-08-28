import type { ChangeEvent, FC } from 'react';
import { useState } from 'react';
import { WritePre } from '../Presentational/WritePre';
import { isNFCSupported } from '../../../../application/lib/IsNFCSupported';
import { useBoolean } from '@chakra-ui/react';

export const WriteCon: FC = () => {
  const [isSupported,] = useState<boolean>(isNFCSupported());
  const [data, setData] = useState<string>('');
  const [writeData, setWriteData] = useState<NDEFRecordInit[]>([]);
  const [isWriting, setIsWriting] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isWritingModal, { on: WritingModalOpen, off: WritingModalClose }] = useBoolean();
  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setData(e.currentTarget.value);
  };

  const handleAddRecord = () => {
    if (data === '') return;
    setWriteData(prev => [...prev, { recordType: 'text', data: data }]);
    setData('');
  };

  const handleToWrite = async () => {
    if (writeData.length === 0) return;
    try {
      setIsWriting(true);
      setIsError(false);
      WritingModalOpen();
      const writer = new NDEFReader();
      await writer.write({ records: writeData });
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsWriting(false);
    }
  };

  return <WritePre writeData={writeData} isError={isError} isSupported={isSupported} isWritingModal={isWritingModal} data={data} isWriting={isWriting} handleAddRecord={handleAddRecord} handleTextChange={handleTextChange} handleToWrite={handleToWrite} WritingModalClose={WritingModalClose} />;
};