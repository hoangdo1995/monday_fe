import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    templateCurrentSelect:null
};

const TemplateModalReducer = createSlice({
  name: 'templateModalReducer',
  initialState,
  reducers: {
    setTemplateModalCurrentSelect(state,{payload}){
        state.templateCurrentSelect = payload;
    }
  },
});

export const {setTemplateModalCurrentSelect} = TemplateModalReducer.actions;

export default TemplateModalReducer.reducer;
