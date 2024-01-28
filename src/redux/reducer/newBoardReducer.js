import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:null,
    listColumn:[],
    objectManager:null,
    viewLayout:null,
    taskNameList:null
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
    },
    setTaskNameList(state,{payload}){
      state.taskNameList = payload;
    }
  },
});

export const {setNewBoardName,setNewBoardListColumn,setNewBoardObjectManager,setNewBoardViewLayout,setTaskNameList} = newBoardReducer.actions;

export default newBoardReducer.reducer;
