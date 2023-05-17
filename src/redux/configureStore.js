import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import userReducer from './user/userSlice';
import details from './details/GetDetails';
// import properties from './properties/GetProperties';
import propertiesReducer from './properties/propertiesSlice';
import addressReducer from './address/addressSlice'; // Import the address reducer

const store = configureStore(
  {
    reducer: {
      user: userReducer,
      details,
      properties: propertiesReducer,
      address: addressReducer,
    },
  },
  applyMiddleware(thunk),
);

export default store;
