import { configureStore } from '@reduxjs/toolkit';
import newBoardReducer from './reducer/newBoardReducer';
import TemplateModalReducer from './reducer/TemplateModalReducer';
import ProjectManagementReducer from './reducer/ProjectManagementReducer';
import TableViewReducer from './reducer/TableProjectReducer/TableViewReducer';
import UserReducer from './reducer/userReducers/UserReducer';
import CreateUserReducer from './reducer/userReducers/createUserReducer';

export const store = configureStore({
  reducer: {
    newBoardReducer:newBoardReducer,
    templateModalReducer:TemplateModalReducer,
    projectManagementReducer:ProjectManagementReducer,
    tableViewReducer:TableViewReducer,
    userReducer:UserReducer,
    createUserReducer:CreateUserReducer
  },
});
