import type { FC } from 'react';
import { HomeCon } from './features/home/UI/Container/HomeCon';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { WriteCon } from './features/write/UI/Container/WriteCon';

const App: FC = () => {

  return (
    <>
      {/* <BrowserRouter basename={import.meta.env.BASE_URL}> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeCon />} />
          <Route path="read" element={<HomeCon />} />
          <Route path="write" element={<WriteCon />} />

          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>Not Found!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
