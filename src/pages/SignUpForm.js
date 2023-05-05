import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { signup } from '../redux/user/userAPI';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/common.css';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [value, setValue] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const onChange = (e) => {
    setValue({
      ...value,
      [e.target.id]: e.target.value,
    });
  };

  const createUser = (e) => {
    e.preventDefault();
    if (value.password === value.confirmPassword) {
      dispatch(signup(value, navigate));
      setPasswordMatchError(false);
    } else {
      setPasswordMatchError(true);
    }
  };

  useEffect(() => {
    document.title = 'Register';
  }, []);

  return (
    <div className="max_width d-flex flex-column back_bg vh-100">
      <div className="max_width d-flex flex-column justify-content-center top_width align-self-center mt-5">
        <img className="logo align-self-center" src="https://thumbs.dreamstime.com/b/rent-icon-189435850.jpg" alt="" />
        <h2 className="text-center my-5">Sign up to your account</h2>
        <div className="bg-white rounded-4">
          <form className="my-3" onSubmit={createUser}>
            <label htmlFor="name" className="max_width px-3 mt-3">
              Full Name
              <br />
              <input
                className="max_width form-control form-control-lg"
                type="text"
                id="name"
                name="name"
                required
                onChange={onChange}
              />
            </label>
            <br />

            <label htmlFor="name" className="max_width px-3 mt-4">
              Email Address
              <br />
              <input
                className="max_width form-control form-control-lg"
                type="email"
                id="email"
                name="email"
                required
                onChange={onChange}
              />
            </label>
            <br />

            <label htmlFor="password" className="max_width px-3 mt-4">
              Password
              <br />
              <input
                className="max_width form-control form-control-lg"
                type="password"
                id="password"
                name="password"
                required
                onChange={onChange}
              />
            </label>
            <br />

            <label htmlFor="confirmPassword" className="max_width px-3 mt-4 mb-4">
              Confirm Password
              <br />
              <input
                className="max_width form-control form-control-lg"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
                onChange={onChange}
              />
            </label>
            <br />

            {passwordMatchError && (
              <p className="">Please verify your password</p>
            )}

            <button type="submit" value="add-tour" className="btn primary_bg text-white lg_button">
              Sign Up
            </button>
            <p className="text-center mt-4">
              Already registered?
              <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
