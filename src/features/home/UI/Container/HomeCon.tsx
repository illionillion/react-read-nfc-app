import type { FC } from 'react';
import { useState } from 'react';
import { isNFCSupported } from '../../../../application/lib/IsNFCSupported';
import { HomePre } from '../Presentational/HomePre';

export const HomeCon: FC = () => {

  const [isSupported,] = useState<boolean>(isNFCSupported());
  const [isReadStarted, setIsReadStarted] = useState<boolean>(false);
  const [isRead, setIsRead] = useState<boolean>(false);
  const [isReadFailed, setIsReadFailed] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [NFCserialNumber, setNFCserialNumber] = useState<string>('');
  const [records, setRecords] = useState<readonly NDEFRecord[]>([]);

  const ReadNFC = async () => {
    try {
      setIsReadStarted(true);
      const reader = new NDEFReader();
      await reader.scan();

      reader.addEventListener('readingerror', () => {
        setErrorMessage('読み込みに失敗しました。もう一度読み取ってください。');
        setIsReadFailed(true);
        setIsRead(true);
      });

      reader.addEventListener('reading', (event) => {
        setIsReadFailed(false);
        setIsRead(true);
        const { message, serialNumber } = event as NDEFReadingEvent;
        setNFCserialNumber(serialNumber);
        setRecords(message.records);
      });
    } catch (error) {
      setErrorMessage('読み込みに失敗しました。エラー：' + error);
      setIsReadFailed(true);
      setIsRead(true);
    }

  };


  return <HomePre {...{ isSupported, isRead, isReadStarted, isReadFailed, errorMessage, handleReadStart: ReadNFC, NFCserialNumber, records }} />;
};