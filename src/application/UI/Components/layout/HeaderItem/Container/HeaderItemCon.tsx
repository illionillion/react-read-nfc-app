import type { FC } from 'react';
import { HeaderItemPre } from '../Presentational/HeaderItemPre';
import { useLocation } from 'react-router-dom';

export const HeaderItemCon: FC = () => {
  const pathname = useLocation().pathname;

  const checkHref = (href:string) => {
    if (import.meta.env.BASE_URL === '/react-read-nfc-app/') {
      return `/react-read-nfc-app${href}`;
    } else {
      return href;
    }
  };

  return <HeaderItemPre pathname={pathname} checkHref={checkHref}/>;
};