import type { FC, ReactNode } from 'react';
import { HeaderItemCon } from './HeaderItem/Container/HeaderItemCon';
import { Center, VStack } from '@chakra-ui/react';

type Props = {
    children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <VStack h="100dvh">
      <HeaderItemCon />
      <Center as='main' flexGrow={1}>{children}</Center>
    </VStack>
  );
};