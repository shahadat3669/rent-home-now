import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import RecoverPass from './pages/RecoverPass';
import ChangePass from './pages/ChangePass';

const App = () => (
  <>

    <Routes>
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/signin" element={<SignInForm />} />
      <Route path="/recover" element={<RecoverPass />} />
      <Route path="/change" element={<ChangePass />} />
    </Routes>

  </>
);

export default App;
