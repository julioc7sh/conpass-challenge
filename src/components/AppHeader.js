import React from "react";
import Logo from "../assets/logo.png";
import "../styles/AppHeader.scss";

const AppHeader = () => {
  return (
    <header className="app-header">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-3">
            <img className="logo" src={Logo} alt="logo conpass" />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-2">
            <a href="/#link-fake1" className="btn-link">
              Link fake 1
            </a>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-2">
            <a href="/#link-fake2" className="btn-link">
              Link fake 2
            </a>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-2">
            <a href="/#link-fake3" className="btn-link">
              Link fake 3
            </a>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-2">
            <a href="/#link-fake4" className="btn-link">
              Link fake 4
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
