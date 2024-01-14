import { useRoutes } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import SignUpTemplate from './templates/SingUpTemplate/SignUpTemplate';
import SignUpPage1 from './pages/SignUpDetailPage/SignUpPage1';
import SignUpPage2 from './pages/SignUpDetailPage/SignUpPage2';
import SignUpPage3 from './pages/SignUpDetailPage/SignUpPage3';
import SignUpPage4 from './pages/SignUpDetailPage/SignUpPage4';
import CreateBoardPage1 from './pages/BoardCreatePage/CreateBoardPage1';


function App() {
  let element = useRoutes([
    {
      path:'/',
      children:[
        {
          path:'sign-up',
          element:<SignUpPage/>
        },
        {
          path:'sign-up-form',
          element:<SignUpTemplate />,
          children:[
            {
              path:'page-1',
              element:<SignUpPage1 nextLink='page-2' prevLink='/sign-up'/>
            },
            {
              path:'page-2',
              element: <SignUpPage2 prevLink={'page-1'} nextLink='page-3'/>
            },
            {
              path:'page-3',
              element:<SignUpPage3 prevLink='page-2' nextLink='page-4'/>
            },
            {
              path:'page-4',
              element:<SignUpPage4 prevLink='page-3'/>
            }

          ]
        },
        {
          path:'create-board',
          children:[
            {
              path:'set-name',
              element:<CreateBoardPage1/>
            }
          ]
        }
      ]
     }
])
  return element;
}

export default App;
