import type { ChangeEvent, FC } from 'react';
import { useState } from 'react';
import { WritePre } from '../Presentational/WritePre';
import { isNFCSupported } from '../../../../application/lib/IsNFCSupported';
import { useBoolean } from '@chakra-ui/react';

export const WriteCon: FC = () => {
  const [isSupported,] = useState<boolean>(isNFCSupported());
  const [data, setData] = useState<string>('');
  const [url, setUrl] = useState<string>('');
  const [json, setJson] = useState<string>('');
  const [writeData, setWriteData] = useState<NDEFRecordInit[]>([]);
  const [isWriting, setIsWriting] = useState<boolean>(false);
  const [imageFile, setImageFile] = useState<File>();
  const [imageBuffer, setImageBuffer] = useState<ArrayBuffer>();
  const [isError, setIsError] = useState<boolean>(false);
  const [isWritingModal, { on: WritingModalOpen, off: WritingModalClose }] = useBoolean();
  const [isAddModalOpen, { on: AddModalOnOpen, off: AddModalOnClose }] = useBoolean();
  const [recordType, setRecordType] = useState<string>('text');

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setData(e.currentTarget.value);
  };

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.currentTarget.value);
  };

  const handleJsonChange = (e : ChangeEvent<HTMLTextAreaElement>) => {
    setJson(e.target.value);
  };

  const handleInputImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (files && files.length > 0) {
      const file = files[0];
      console.log(file);
      setImageFile(file);
      setImageBuffer(await file.arrayBuffer());
    } else {
      setImageFile(undefined);
      setImageBuffer(undefined);
    }
  };

  const jsonCheck = ():boolean => {
    try {
      JSON.parse(json);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const handleAddRecord = () => {
    if (recordType === 'text' && data === '') return;
    if (recordType === 'url' && url === '') return;
    if (recordType === 'json' && json === '' || recordType === 'json' && !jsonCheck()) return;
    if (recordType === 'image' && (!imageFile || !imageBuffer)) return;
    
    setWriteData(prev => [...prev, (() => {
      switch (recordType) {
        case 'text':
          return { recordType: 'text', data: data };
        case 'url':
          return { recordType: 'url', data:  url };
        case 'json': {
          const encoder = new TextEncoder();
          return { recordType: 'mime', mediaType: 'application/json', data: encoder.encode(json) };
        }
        default: {
          return { recordType: 'mime', mediaType: imageFile?.type, data: imageBuffer };
        }
      }
    })()]);
    setData('');
    setUrl('');
    setJson('');
    setImageFile(undefined);
    setImageBuffer(undefined);
    AddModalOnClose();
  };

  const handleToWrite = async () => {
    if (writeData.length === 0) return;
    try {
      setIsWriting(true);
      setIsError(false);
      WritingModalOpen();
      const writer = new NDEFReader();
      console.log(writeData);
      
      await writer.write({ records: writeData });
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsWriting(false);
    }
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setRecordType(e.currentTarget.value);
  };

  return <WritePre
    writeData={writeData}
    isError={isError}
    isSupported={isSupported}
    isWritingModal={isWritingModal}
    isAddModalOpen={isAddModalOpen}
    data={data}
    url={url}
    isWriting={isWriting}
    recordType={recordType}
    json={json}
    handleAddRecord={handleAddRecord}
    handleTextChange={handleTextChange}
    handleUrlChange={handleUrlChange}
    handleToWrite={handleToWrite}
    WritingModalClose={WritingModalClose}
    AddModalOnOpen={AddModalOnOpen}
    AddModalOnClose={AddModalOnClose}
    handleSelectChange={handleSelectChange}
    handleJsonChange={handleJsonChange}
    handleInputImageChange={handleInputImageChange}
  />;
};