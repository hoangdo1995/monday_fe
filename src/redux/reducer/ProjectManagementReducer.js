import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentProject:{
        status:null,
        data:null
    },

};

const ProjectManagementReducer = createSlice({
  name: "project_management",
  initialState,
  reducers: {
      setCurrentProject(state, { payload }) {
          // code gởi về back end lây dữ liệu
        //   có thể chuyển về async thunk 
      }
  },
  extraReducers(builder){
    builder
    .addCase(postCurrentProjectManagement.fulfilled,(state,action)=>{
        state.currentProject.data = action.payload;
        state.currentProject.status = 'complete' 
    })
    .addCase(postCurrentProjectManagement.pending,(state,action)=>{
        state.currentProject.status = 'loading';
    })
    .addCase(postCurrentProjectManagement.rejected,(state,action)=>{
        state.currentProject.status = 'error';
    })
  }
});

export const {setCurrentProject} = ProjectManagementReducer.actions;

export default ProjectManagementReducer.reducer;

export const postCurrentProjectManagement = createAsyncThunk('post/currentProjectManagement',async()=>{
    /// code gởi dử liệu về back end và nhận lại dử liệu để cập nhật vào giao diện
    // const response = await client.get('/fakeApi/posts')
    return {type:'Basic_project_management',name:'Basic project management',id:10};
});
