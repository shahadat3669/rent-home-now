import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../redux/user/userAPI';

const CriptoJS = require('crypto-js');

const Login = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [value, setValue] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) => {
    setValue({
      ...value,
      [e.target.id]: e.target.value,
    });
  };

  const loginUser = (e) => {
    e.preventDefault();
    dispatch(login(value));
    if (user.length > 0) {
      const cypherText = CriptoJS.AES.encrypt(
        JSON.stringify(user[0]),
        'user',
      ).toString();
      localStorage.setItem('user', cypherText);
      navigate('/');
    }
  };

  useEffect(() => {
    if (user.length > 0) {
      const cypherText = CriptoJS.AES.encrypt(
        JSON.stringify(user[0]),
        'user',
      ).toString();
      localStorage.setItem('user', cypherText);
      navigate('/');
    }
  }, [navigate, user]);

  useEffect(() => {
    document.title = 'Login';
  }, []);

  return (
    <div className="max_width d-flex flex-column back_bg vh-100">
      <div className="max_width d-flex flex-column justify-content-center top_width align-self-center mt-5">
        <img className="logo align-self-center" src="https://thumbs.dreamstime.com/b/rent-icon-189435850.jpg" alt="" />
        <h2 className="text-center my-5">Sign in to your account</h2>
        <div className="bg-white rounded-4">
          <form className="my-3" onSubmit={loginUser}>
            <label htmlFor="email" className="max_width px-3 mt-3">
              Email Address
              <br />
              <input
                className="max_width form-control form-control-lg"
                type="email"
                id="email"
                required
                onChange={onChange}
              />
            </label>
            <br />

            <label htmlFor="password" className="max_width px-3 mt-4 mb-4">
              Password
              <br />
              <input
                className="max_width form-control form-control-lg"
                type="password"
                id="password"
                required
                onChange={onChange}
              />
            </label>
            <br />

            <button type="submit" className="btn primary_bg text-white lg_button">Sign In</button>

            <p className="text-center mt-4">
              Not registered?
              <Link to="/signup">Create an account</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
