import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import RecoverPass from './pages/RecoverPass';
import ChangePass from './pages/ChangePass';
import Details from './pages/Details';
import DefaultLayout from './layouts/DefaultLayout';
import Layout from './layouts/Layout';

const App = () => (
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
        <Route
          path="/details/:id/"
          element={<Details />}
        />
      </Route>
    </Routes>
  </>
);

export default App;
