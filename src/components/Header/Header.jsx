import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = ({ changeLogIn }) => {

    const logOut = () => {
        localStorage.removeItem("tokenNibble")
        changeLogIn(false);
    }


    return (
        <header className="container ">
            <nav className="navbar bg-info navbar-expand-lg fw-bold fixed-top">

                <Link className="interviewsReports ms-5" to="/home">
                    <h1 className="text-dark">
                        Interviews Reports
                    </h1>
                </Link>
                <button className="navbar-toggler font-weight-bold rounded me-sm-5"
                    type="button">
                    <i className="fas fa-bars"></i>
                </button>

                <div className="pagesButtons collapse navbar-collapse justify-content-lg-end">
                <div className="navbar-nav ml-auto"> 
                    <Link className="candidatesLinks" to="/home">
                        <button type="button" className="btnCandidates btn btn-light btn-outline-secondary nav-item mx-0 mx-lg-1">
                            Candidates
                        </button>
                    </Link>

                    <Link className="reportsLinks" to="/reports">
                        <button type="button" className="btnReports btn btn-light btn-outline-secondary nav-item mx-0 mx-lg-1">
                            Reports
                        </button>
                    </Link>

                    <button type="button" onClick={logOut} className="btnLogOut btn btn-light btn-outline-secondary nav-item mx-0 me-lg-5">
                        Log Out
                    </button>
                </div>
                </div>
            </nav>
        </header>
    );
};
