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
        <div className="container-fluid raw">
          <Link className="interviewsReports sm-col-12 md-col-6" to="/home">
            <h1 className="ms-5 ">Interviews Reports</h1>
          </Link>
          <div className="justify-content-lg-end raw">
            <Link className="candidatesLinks " to="/home">
              <button
                type="button"
                className="btnCandidates btn btn-light me-5 ps-5 pe-5 ms-sm-5 " >Candidates
              </button>
            </Link>
            <button
              type="button"
              onClick={logOut}
              className="btnLogOut btn btn-light me-5 ps-5 pe-5"> Log Out
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
