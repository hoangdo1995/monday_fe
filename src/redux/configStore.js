import { configureStore } from '@reduxjs/toolkit';
import newBoardReducer from './reducer/newBoardReducer';

export const store = configureStore({
  reducer: {
    newBoardReducer:newBoardReducer,
  },
});
