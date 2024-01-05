import { Routes, Route } from 'react-router-dom';
import SignUpDetailPage from './pages/SignUpDetailPage/SignUpDetailPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';

function App() {
  return (
    <>
      <Routes>
          <Route path='/sign-up' element={<SignUpPage/>}/>
          <Route path='/sign-up-form' element={<SignUpDetailPage/>}/>
      </Routes>
    </>
  );
}

export default App;
