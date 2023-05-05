import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { recover } from '../redux/user/userAPI';

const RecoverPass = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [value, setValue] = useState({
    email: '',
  });

  const onChange = (e) => {
    setValue({
      ...value,
      [e.target.id]: e.target.value,
    });
  };

  const createUser = (e) => {
    e.preventDefault();
    dispatch(recover(value, navigate));
  };

  useEffect(() => {
    document.title = 'Register';
  }, []);

  return (
    <div className="max_width d-flex flex-column back_bg vh-100">
      <div className="max_width d-flex flex-column justify-content-center top_width align-self-center mt-5">
        <img className="logo align-self-center" src="https://thumbs.dreamstime.com/b/rent-icon-189435850.jpg" alt="" />
        <h2 className="text-center mt-5">Forgot your password?</h2>
        <p className="text-center mb-5">Enter your email to receive recovery instructions</p>
        <div className="bg-white rounded-4">
          <form className="my-3" onSubmit={createUser}>
            <label htmlFor="email" className="max_width px-3 mt-4 mb-4">
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

            <button type="submit" value="add-tour" className="btn primary_bg text-white lg_button">
              Send Email
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

export default RecoverPass;
