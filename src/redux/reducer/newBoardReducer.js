import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:null,
    listColumn:[],
    objectManager:null,
    viewLayout:null,
    taskNameList:null,
    groupName:{
      groupTask1:null,
      groupTask2:null
    }
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
    },
    setGroupName1(state,{payload}){
      state.groupName.groupTask1 = payload;
    },
    setGroupName2(state,{payload}){
      state.groupName.groupTask2 = payload;
    }

  },
});

export const {setNewBoardName,setNewBoardListColumn,setNewBoardObjectManager,setNewBoardViewLayout,setTaskNameList,setGroupName1,setGroupName2} = newBoardReducer.actions;

export default newBoardReducer.reducer;
