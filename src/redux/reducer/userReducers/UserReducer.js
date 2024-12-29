import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiService from '../../../utils/apiService';
import { loading } from '../../../utils/enums/reduxEnums';
import { history } from '../../..';
import CookieService from '../../../utils/cookieService';

const initialState = {
    loginInfo:{
      data:{
        access_token:CookieService.getCookie('access_token')
      }
    },
    loading:loading.IDLE
}

const UserReducer = createSlice({
  name: "users",
  initialState,
  reducers: {
      setLoginInfo(state,action){
        state.loginInfo = action.payload;
      },
      resetLoginInfo(state,{payload}){
        state.loginInfo = null
      }

  },
  extraReducers:(builder)=>{
    builder.addCase(fetchLogin.fulfilled,(state,{payload})=>{
        state.loading = loading.SUCCEEDED;
        state.loginInfo = payload;
        CookieService.setCookie('access_token',payload?.data?.access_token)
        // redirect to home page
        setTimeout( ()=>history.push('/'),1000)
    })
    .addCase(fetchLogin.pending,(state,action)=>{
      state.loading = loading.PENDING;
    })
    .addCase(fetchLogin.rejected,(state,action)=>{
      state.loading = loading.FAILED;
      state.loginInfo.message = 'Connection failed';
    })
  }
});


export const {setLoginInfo,resetLoginInfo} = UserReducer.actions

export default UserReducer.reducer

export const fetchLogin = createAsyncThunk(
    'users/login',
    async(loginInfo)=>{
        const response = await apiService.post('/auth/login',loginInfo);
        return response.data;
    }
)