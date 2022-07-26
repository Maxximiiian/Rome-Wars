import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/ChooseHero" className="btn btn-danger">Выбери бойца!</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" />
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/" className="btn btn-danger">Home</Link>
          {/* <Link to="/Forum" className="btn btn-danger">Forum</Link> */}
          <a className="nav-item nav-link" href="#">Pricing</a>
          <a className="nav-item nav-link disabled" href="#">Disabled</a>
        </div>
      </div>
    </nav>

  );
}
