import { ChakraProvider } from '@chakra-ui/react';
import type { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { NotFoundCon } from '../../features/NotFound/UI/Container/NotFoundCon';
import { HomeCon } from '../../features/home/UI/Container/HomeCon';
import { WriteCon } from '../../features/write/UI/Container/WriteCon';

export const AppProviders: FC = () => {
  return <ChakraProvider>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path='/' element={<Navigate to='/read' />} />
        <Route path='/read' element={<HomeCon />} />
        <Route path='/write' element={<WriteCon />} />
        <Route
          path='*'
          element={<NotFoundCon />}
        />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>;
};