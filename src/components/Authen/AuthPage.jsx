import React from 'react';
import { Link } from 'react-router-dom';

export default function AuthPage() {
  const signInHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mx-auto mt-5" style={{ width: '400px' }}>
      <div style={{ height: '250px' }} />
      <form className="container bg-secondary rounded-3 py-3" align="center" onSubmit={signInHandler}>
        <div className="mb-3">
          <h2>Username</h2>
          <input
            type="text"
            name="user"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-3">
          <h2>Password</h2>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Your Password"
          />
        </div>
        <button type="submit" className="btn btn-danger">Sign in!</button>

        <div className="mx-auto mt-5">
          <h2>Don't register yet?</h2>
        </div>
        <Link to="/registration" className="btn btn-danger">Registration</Link>
      </form>
    </div>
  );
}
