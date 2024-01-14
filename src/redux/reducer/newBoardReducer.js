import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:''
};

const newBoardReducer = createSlice({
  name: 'new_board',
  initialState,
  reducers: {
    setNewBoard(state,{payload}){
        state.name = payload;
    },
  },
});

export const {setNewBoard} = newBoardReducer.actions;

export default newBoardReducer.reducer;
