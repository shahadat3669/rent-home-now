import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { changepass } from '../redux/user/userAPI';

const ChangePass = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [value, setValue] = useState({
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
      dispatch(changepass(value, navigate));
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
        <h2 className="text-center my-5">Do you want to change your password?</h2>
        <div className="bg-white rounded-4">
          <form className="my-3" onSubmit={createUser}>
            <label htmlFor="password" className="max_width px-3 mt-3">
              Old Password
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

            <label htmlFor="password" className="max_width px-3 mt-4">
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

            <label htmlFor="confirmPassword" className="max_width px-3 mt-4 mb-4">
              Confirm Password
              <br />
              <input
                className="max_width form-control form-control-lg"
                type="password"
                id="confirmPassword"
                required
                onChange={onChange}
              />
            </label>
            <br />

            {passwordMatchError && (
              <p className="error-message">Please verify your password</p>
            )}

            <button type="submit" value="add-tour" className="btn primary_bg text-white lg_button">
              Change Password
            </button>
            <p className="text-center mt-4">
              <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePass;
