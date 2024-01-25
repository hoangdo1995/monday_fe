import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:'',
    listColumn:['owner','status','due_date'],
    objectManager:'project',
    viewLayout:null
};

const newBoardReducer = createSlice({
  name: 'new_board',
  initialState,
  reducers: {
    setNewBoardName(state,{payload}){
        state.name = payload;
    },
    setNewBoardListColumn:(state,{payload})=>{
      state.listColumn = payload;
    },
    setNewBoardObjectManager(state,{payload}){
      state.objectManager = payload;
    },
    setNewBoardViewLayout(state,{payload}){
      state.viewLayout = payload;
    }
  },
});

export const {setNewBoardName,setNewBoardListColumn,setNewBoardObjectManager,setNewBoardViewLayout} = newBoardReducer.actions;

export default newBoardReducer.reducer;
