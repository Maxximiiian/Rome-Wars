import React from 'react';

export default function Registration() {
  return (
    <div className="mx-auto mt-5" style={{ width: '400px' }}>
      <div style={{ height: '250px' }} />
      <form className="container" align="center">
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
        <div className="mb-3">
          <h2>Repeat Password</h2>
          <input
            type="password"
            name="repeat"
            className="form-control"
            id="exampleInputPassword2"
            placeholder="Repeat Password"
          />
        </div>
        <button type="submit" className="btn btn-danger">Submit</button>
      </form>

    </div>
  );
}
