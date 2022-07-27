import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Registration() {
  const [input, setInput] = useState({ username: '', password: '', repeat: '' });
  const changeHandler = (e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const signUpHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mx-auto mt-5" style={{ width: '400px' }}>
      <div style={{ height: '250px' }} />
      <form className="container bg-secondary rounded-3 py-3" align="center" onSubmit={signUpHandler}>
        <div className="mb-3">
          <h2>Username</h2>
          <input
            value={input.username}
            onChange={changeHandler}
            type="text"
            name="username"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-3">
          <h2>Password</h2>
          <input
            value={input.password}
            onChange={changeHandler}
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Your Password"
          />
        </div>
        <div className="mb-3">
          <h2>Repeat Password</h2>
          <input
            value={input.repeat}
            onChange={changeHandler}
            type="password"
            name="repeat"
            className="form-control"
            id="exampleInputPassword2"
            placeholder="Repeat Password"
          />
        </div>
        <div>
          <button type="submit" className="btn btn-danger">Sign up!</button>
          <h1></h1>
          <Link to="/" class="btn btn-outline-danger float-left">←Back to Auth</Link>
        </div>

      </form>
    </div>
  );
}
