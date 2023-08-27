import type { FC } from 'react';
import { HeaderItemPre } from '../Presentational/HeaderItemPre';
import { useLocation } from "react-router-dom";

export const HeaderItemCon: FC = () => {
  const pathname = useLocation().pathname;

  return <HeaderItemPre pathname={pathname} />;
};