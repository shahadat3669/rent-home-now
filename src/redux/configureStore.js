import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import userReducer from './user/userSlice';
import details from './details/GetDetails';
import properties from './properties/GetProperties';

const store = configureStore(
  {
    reducer: {
      user: userReducer,
      details,
      properties,
    },
  },
  applyMiddleware(thunk),
);

export default store;
