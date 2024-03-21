import type { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderItemPre } from '../Presentational/HeaderItemPre';

export const HeaderItemCon: FC = () => {
  const pathname = useLocation().pathname;
  return <HeaderItemPre pathname={pathname}/>;
};