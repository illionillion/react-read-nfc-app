import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { HomePre } from '../Presentational/HomePre';

export const HomeCon: FC = () => {

  const [isSupported, setIsSupported] = useState<boolean>(false);
  const [isReadStarted, setIsReadStarted] = useState<boolean>(false);
  const [isRead, setIsRead] = useState<boolean>(false);
  const [isReadFailed, setIsReadFailed] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [NFCserialNumber, setNFCserialNumber] = useState<string>('');
  const [records, setRecords] = useState<readonly NDEFRecord[]>([]);
  // 対応しているかの確認
  const isNFCSupported = () => {
    if ('NDEFReader' in window) {
      // NFC読み取り機能がサポートされている（Chromeの場合）
      return true;
    } else {
      // NFC読み取り機能がサポートされていない
      return false;
    }
  };

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

  let ignore = false;
  useEffect(() => {

    if (!ignore) {
      if (isNFCSupported()) {
        setIsSupported(true);
      }
    }

    return () => {
      ignore = true;
    };
  }, []);


  return <HomePre {...{ isSupported, isRead, isReadStarted, isReadFailed, errorMessage, handleReadStart: ReadNFC, NFCserialNumber, records }} />;
};