import { Routes, Route } from 'react-router-dom';
import SigninPage from './pages/SignInPage/SignInPage';
function App() {
  return (
    <>
      <Routes>
          <Route path='/sign-in' element={<SigninPage/>}/>
      </Routes>
    </>
  );
}

export default App;
