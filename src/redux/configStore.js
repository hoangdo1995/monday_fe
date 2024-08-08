import { configureStore } from '@reduxjs/toolkit';
import newBoardReducer from './reducer/newBoardReducer';
import TemplateModalReducer from './reducer/TemplateModalReducer';
import ProjectManagementReducer from './reducer/ProjectManagementReducer';
import TableViewReducer from './reducer/TableProjectReducer/TableViewReducer';

export const store = configureStore({
  reducer: {
    newBoardReducer:newBoardReducer,
    templateModalReducer:TemplateModalReducer,
    projectManagementReducer:ProjectManagementReducer,
    tableViewReducer:TableViewReducer
  },
});
