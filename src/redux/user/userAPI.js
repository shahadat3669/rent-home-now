import { addUSER, removeUSER } from './user';

const SIGNUP = '';
const LOGIN = '';
const CHANGEPASS = '';
const RECOVER = '';

export const login = (data) => async (dispatch) => {
  const response = await fetch(LOGIN, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (response.status === 200) {
    const data = await response.json();
    dispatch(addUSER(data));
  } else {
    alert('Something went wrong, please verify your data and try again');
  }
};

export const signup = (data, navigate) => async () => {
  const response = await fetch(SIGNUP, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.status !== 201) {
    alert('Something went wrong, please fill all the fields correctly and try again');
    navigate('/SignUp');
  } else {
    navigate('/login');
  }
};

export const changepass = (data, navigate) => async () => {
  const response = await fetch(CHANGEPASS, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.status !== 201) {
    alert('Something went wrong, please try again');
    navigate('/SignUp');
  } else {
    navigate('/login');
  }
};

export const recover = (data, navigate) => async () => {
  const response = await fetch(RECOVER, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.status !== 201) {
    alert('Something went wrong, please verify you have an account and try again');
    navigate('/SignUp');
  } else {
    navigate('/login');
  }
};

export const logout = (id, token) => async (dispatch) => {
  const response = await fetch(`SIGNUP/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });
  if (response.status === 200) {
    dispatch(removeUSER(id));
  }
};
