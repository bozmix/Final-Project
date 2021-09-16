import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = ({ changeLogIn }) => {
  const logOut = () => {
    localStorage.removeItem("userLoggedIn#10394e1");
    changeLogIn();
  };

  return (
    <header className="container-fluid">
      <nav class="navbar navbar-default ">
      </nav>   
      <nav className="navbar navbar-default navbar-expand-lg bg-light fixed-top">
        <div className="container-fluid">
          <Link className="interviewsReports sm-col-12 md-col-4" to="/home">
            <h1 className="ms-5">Interviews Reports</h1>
          </Link>
          <div className="justify-content-md-end justify-content-sm-start pe-md-5 pe-lg-0  ms-sm-5 row">
            <Link className="candidatesLinks col-sm-12 col-md-4 ms-md-1 me-5 " to="/home">
              <button
                type="button"
                className="btnCandidates btn btn-light px-sm-4 px-md-3 px-lg-4" >Candidates
              </button>
            </Link>
            <div className="col-sm-12 col-md-5 me-lg-5 px-lg-4">
            <button
              type="button"
              onClick={logOut}
              className="btnLogOut btn btn-light px-sm-4 px-md-3 px-lg-4 "> Log Out
            </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
