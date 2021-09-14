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
      <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container-fluid">
          <Link className="interviewsReports sm-col-12 md-col-5" to="/home">
            <h1 className="ms-5">Interviews Reports</h1>
          </Link>
          <div className="justify-content-lg-end pe-md-5 pe-lg-0">
            <Link className="candidatesLinks" to="/home">
              <button
                type="button"
                className="btnCandidates btn btn-light me-5 px-sm-5 px-md-3 px-lg-5 ms-sm-5 ms-md-1 col-sm-6 col-md-4 " >Candidates
              </button>
            </Link>
            <button
              type="button"
              onClick={logOut}
              className="btnLogOut btn btn-light me-lg-5 px-sm-5 px-md-3 px-lg-5 col-sm-6 ms-sm-5  col-md-4"> Log Out
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
