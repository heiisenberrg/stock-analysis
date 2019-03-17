import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import Routes from '../../routes/index';

const App = () => (
  <Fragment>
    {/* <NavBar key="nav"/> */}
    <div className="container-fluid">
      {/* <SideBar/> */}
      <div key="mainContainer" className="main">
      "WELCOME!!!! Time to code"
        {/* <Routes key="logged-in-routes"/> */}
      </div>
    </div>
  </Fragment>
);

export default withRouter(connect(null, null)(App));
