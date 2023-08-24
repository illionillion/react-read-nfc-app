import type { FC, ReactNode } from 'react';
import { HeaderItemCon } from './HeaderItem/Container/HeaderItemCon';

type Props = {
    children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <HeaderItemCon />
      <main>{children}</main>
    </>
  );
};