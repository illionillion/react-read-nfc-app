import { ChakraProvider } from '@chakra-ui/react';
import type { FC, ReactNode } from 'react';

type props = {
    children: ReactNode
}

export const AppProviders: FC<props> = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};