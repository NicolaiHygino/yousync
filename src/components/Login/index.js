import React from 'react';

const Login = () => {
  return (
    <form aria-label="form">
      <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        type="text"
      />
    </form>
  );
};

export default Login;
