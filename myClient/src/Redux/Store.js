import { configureStore } from '@reduxjs/toolkit'
import userReducer from './User/UserSlice';

const reducer = {user: userReducer}
const store = configureStore({
 reducer
});
export default store;
