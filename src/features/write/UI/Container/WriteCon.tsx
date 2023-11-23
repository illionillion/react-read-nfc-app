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
  const [isError, setIsError] = useState<boolean>(false);
  const [isWritingModal, { on: WritingModalOpen, off: WritingModalClose }] = useBoolean();
  const [isAddModalOpen, { on: AddModalOnOpen, off: AddModalOnClose }] = useBoolean();
  const [isEditModalOpen, { on: EditModalOnOpen, off: EditModalOnClose }] = useBoolean();
  const [recordType, setRecordType] = useState<string>('text');
  const [editIndex, setEditIndex] = useState<number>(-1);
  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setData(e.currentTarget.value);
  };

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.currentTarget.value);
  };

  const handleJsonChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setJson(e.target.value);
  };

  const jsonCheck = (): boolean => {
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

    setWriteData(prev => [...prev, (() => {
      switch (recordType) {
        case 'text':
          return { recordType: 'text', data: data };
        case 'url':
          return { recordType: 'url', data: url };
        default: {
          const encoder = new TextEncoder();
          return { recordType: 'mime', mediaType: 'application/json', data: encoder.encode(json) };
        }
      }
    })()]);
    setData('');
    setUrl('');
    setJson('');
    AddModalOnClose();
  };

  const handleEditOpen = (index: number) => {
    const editData = writeData.filter((_, i) => i === index);
    if (editData.length === 0) return;
    setEditIndex(index);
    const item = editData[0];
    setRecordType(
      item.mediaType === 'application/json' && item.recordType === 'mime' ? 'json' : item.recordType
    );
    switch (item.recordType) {
      case 'text':
        setData((item.data ?? '') as string);
        break;
      case 'url':
        setUrl((item.data ?? '') as string);
        break;
      default: {
        const textDecoder = new TextDecoder();
        const text = textDecoder.decode((item.data ?? '') as DataView);
        setJson((text) as string);
        break;
      }
    }
    EditModalOnOpen();
  };

  const handleEditRecord = (index: number) => {
    if (recordType === 'text' && data === '') return;
    if (recordType === 'url' && url === '') return;
    if (recordType === 'json' && json === '' || recordType === 'json' && !jsonCheck()) return;

    setWriteData(prev => prev.map((item, i) => i === index ? (() => {
      switch (recordType) {
        case 'text':
          return { recordType: 'text', data: data };
        case 'url':
          return { recordType: 'url', data: url };
        default: {
          const encoder = new TextEncoder();
          return { recordType: 'mime', mediaType: 'application/json', data: encoder.encode(json) };
        }
      }
    })() : item));
    handleEditClose();
  };

  const handleEditClose = () => {
    setData('');
    setUrl('');
    setJson('');
    setEditIndex(-1);
    EditModalOnClose();
  };

  const handleDeleteRecord = (index: number) => {
    const newData = writeData.filter((_, i) => i !== index);
    setWriteData(newData);
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

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setRecordType(e.currentTarget.value);
  };

  return <WritePre
    writeData={writeData}
    isError={isError}
    isSupported={isSupported}
    isWritingModal={isWritingModal}
    isAddModalOpen={isAddModalOpen}
    isEditModalOpen={isEditModalOpen}
    data={data}
    url={url}
    isWriting={isWriting}
    recordType={recordType}
    json={json}
    editIndex={editIndex}
    handleAddRecord={handleAddRecord}
    handleDeleteRecord={handleDeleteRecord}
    handleTextChange={handleTextChange}
    handleUrlChange={handleUrlChange}
    handleToWrite={handleToWrite}
    WritingModalClose={WritingModalClose}
    AddModalOnOpen={AddModalOnOpen}
    AddModalOnClose={AddModalOnClose}
    handleSelectChange={handleSelectChange}
    handleJsonChange={handleJsonChange}
    handleEditOpen={handleEditOpen}
    handleEditClose={handleEditClose}
    handleEditRecord={handleEditRecord}
  />;
};