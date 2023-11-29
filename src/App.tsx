import type { FC } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { NotFoundCon } from './features/NotFound/UI/Container/NotFoundCon';
import { HomeCon } from './features/home/UI/Container/HomeCon';
import { WriteCon } from './features/write/UI/Container/WriteCon';

const App: FC = () => {
  return (
    <>
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
    </>
  );
};

export default App;
