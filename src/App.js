import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import RecoverPass from './pages/RecoverPass';
import ChangePass from './pages/ChangePass';
import Details from './pages/Details';
import DefaultLayout from './layouts/DefaultLayout';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import AddReservation from './pages/AddReservation';
import NewProperty from './pages/NewProperty';
import MyReservations from './pages/MyReservations';
import { getAccessToken, userReservations } from './redux/user/userSlice';
import MyProperty from './pages/MyProperty';

const App = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(getAccessToken);

  useEffect(() => {
    if (accessToken !== '') {
      dispatch(userReservations(accessToken));
    }
  }, [accessToken, dispatch]);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/signup"
            element={<SignUpForm />}
          />
          <Route
            path="/signin"
            element={<SignInForm />}
          />
          <Route
            path="/recover"
            element={<RecoverPass />}
          />
          <Route
            path="/change"
            element={<ChangePass />}
          />
        </Route>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/my-property" element={<MyProperty />} />
          <Route path="/new-property" element={<NewProperty />} />
          <Route path="/my-reservations" element={<MyReservations />} />
          <Route
            path="/details/:id/"
            element={<Details />}
          />
          <Route path="reservations/new" element={<AddReservation />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
