import React from "react";
import PropTypes from "prop-types";

const Header = () => {
  return(
    <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky">
      <div className="container">
        <a className="navbar-brand logo text-uppercase" href="index.html">
          <img src="images/logo-dark.png" alt="" height="22" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <i className="mdi mdi-menu"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto navbar-center" id="mySidenav">
          </ul>
          <div className="navbar-button d-none d-lg-inline-block">
            <a href="https://github.com/eslimdaga" target="_blank" className="btn btn-sm btn-primary btn-round" rel="noreferrer">Ver Código</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;