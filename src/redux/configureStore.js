import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import userReducer from './user/userSlice';
import details from './details/GetDetails';
// import properties from './properties/GetProperties';
import propertiesReducer from './properties/propertiesSlice';
import reservationReducer from './reservation/reservationSlice';

const store = configureStore(
  {
    reducer: {
      user: userReducer,
      details,
      properties: propertiesReducer,
      reservations: reservationReducer,
    },
  },
  applyMiddleware(thunk),
);

export default store;
