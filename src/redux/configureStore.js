import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { userReducer } from './user/user';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
}, applyMiddleware(thunk));

export default store;
