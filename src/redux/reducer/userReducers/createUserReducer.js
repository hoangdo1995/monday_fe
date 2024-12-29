import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiService from '../../../utils/apiService';
import { loading } from '../../../utils/enums/reduxEnums';
import { history } from '../../..';

const initialState = {
    newUser:{
        email:'',
        full_name:"",
        password:"",
        account_name:"",
    },
    personalizationData:{
        bring_here:'',
        current_role:'',
        like_focus:'',
        team_emails:[]
    },
    activePageSignUp:[],
    apiMessage:null,
    status:null
}

const CreateUserReducer = createSlice({
  name: "create_user",
  initialState,
  reducers: {
    setNewUserCreate(state,{payload}){
        state.newUser = {...state.newUser,...payload}; 
    },
    setPersonalizationDataCreate(state,{payload}){
        state.personalizationData = {...state.personalizationData,...payload}; 
    },
    setActivePageSignUp(state,{payload}){
        const updatedArray = new Set([...state.activePageSignUp, payload]);
        state.activePageSignUp = [...updatedArray]
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchSingUpNewUser.fulfilled,(state,{payload})=>{
        state.status = loading.SUCCEEDED;
        console.log(payload)
        state.apiMessage = payload?.data?.message;
        setTimeout(()=>history.push('/log-in'),2000);
    })
    .addCase(fetchSingUpNewUser.pending,(state,action)=>{
        state.status = loading.PENDING
    })
    .addCase(fetchSingUpNewUser.rejected,(state,action)=>{
        state.apiMessage = action?.error?.message;
        state.status = loading.FAILED
    })
  },
});

export const fetchSingUpNewUser = createAsyncThunk(
    'user/signup',
    async(data)=>{
        const response = await apiService.post('/users',data);
        console.log('response',response.data.data);
        return response;
    }   
)

export const {setNewUserCreate,setPersonalizationDataCreate,setActivePageSignUp} = CreateUserReducer.actions

export default CreateUserReducer.reducer