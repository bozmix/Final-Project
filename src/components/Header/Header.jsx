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
          <Link className="interviewsReports" to="/home">
            <h1 className="text-dark ms-5">Interviews Reports</h1>
          </Link>
          <button
            class="navbar-toggler text-uppercase font-weight-bold  text-dark rounded me-5"
            type="button"
          >
            Menu
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse justify-content-lg-end">
            <Link className="candidatesLinks" to="/home">
              <button
                type="button"
                className="btnCandidates btn btn-light btn-outline-secondary me-5 ps-5 pe-5"
              >
                Candidates
              </button>
            </Link>
            <button
              type="button"
              onClick={logOut}
              className="btnLogOut btn btn-light btn-outline-secondary me-5 ps-5 pe-5"
            >
              Log Out
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
