import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import userReducer from './user/userSlice';
import details from './details/GetDetails';
// import properties from './properties/GetProperties';
import propertiesReducer from './properties/propertiesSlice';

const store = configureStore(
  {
    reducer: {
      user: userReducer,
      details,
      properties: propertiesReducer,
    },
  },
  applyMiddleware(thunk),
);

export default store;
