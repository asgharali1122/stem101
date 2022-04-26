import { combineReducers } from '@reduxjs/toolkit';
import AuthReducer from './authSlice';


const rootReducer = combineReducers({
  
  auth: AuthReducer,

});

export default rootReducer;