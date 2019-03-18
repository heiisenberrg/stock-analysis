import React from 'react';
import './appHeader.scss';
import logo from '../../../assets/images/logo.png';

const AppHeader = () => (
  <header className="app-header">
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand d-flex" href="/">
        <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="hypto" />
        <h4> Stock Analysis </h4>
      </a>
    </nav>
  </header>
);

export default AppHeader;
