import { useState, type FC } from 'react';
import { WritePre } from '../Presentational/WritePre';
import { isNFCSupported } from '../../../../application/lib/IsNFCSupported';

export const WriteCon:FC = () => {
  const [isSupported,] = useState<boolean>(isNFCSupported());

  return <WritePre isSupported={isSupported}/>;
};