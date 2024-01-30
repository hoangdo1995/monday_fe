import { useRoutes } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import SignUpTemplate from './templates/SingUpTemplate/SignUpTemplate';
import SignUpPage1 from './pages/SignUpDetailPage/SignUpPage1';
import SignUpPage2 from './pages/SignUpDetailPage/SignUpPage2';
import SignUpPage3 from './pages/SignUpDetailPage/SignUpPage3';
import SignUpPage4 from './pages/SignUpDetailPage/SignUpPage4';
import CreateBoardPage1 from './pages/BoardCreatePage/CreateBoardPage1';
import SelectColumnPage from './pages/BoardCreatePage/SelectColumnPage';
import SelectViewLayoutPage from './pages/BoardCreatePage/SelectViewLayoutPage';
import SelectObjectManagerPage from './pages/BoardCreatePage/SelectObjectManagerPage';
import CreateNewBoardTemplate from './templates/CreateNewBoardTemplate/CreateNewBoardTemplate';
import EnterBoardNamePage from './pages/BoardCreatePage/EnterBoardNamePage';
import EnterTaskNamePage from './pages/BoardCreatePage/EnterTaskNamePage';
import EnterGroupTaskPage from './pages/BoardCreatePage/EnterGroupTaskPage';


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
          element:<CreateNewBoardTemplate/>,
          children:[
            {
              path:'set-name',
              element:<EnterBoardNamePage/>
            },
            {
              path:'select-column',
              element:<SelectColumnPage/>
            },
            {
              path:'select-object',
              element:<SelectObjectManagerPage/>
            },
            {
              path:'select-view-layout',
              element:<SelectViewLayoutPage/>
            },
            {
              path:'enter-task-name',
              element:<EnterTaskNamePage/>
            },
            {
              path:'group-task',
              element:<EnterGroupTaskPage/>
            }
          ]
        }
      ]
     }
])
  return element;
}

export default App;
