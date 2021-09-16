import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import "./Header.css";

export const Header = ({ changeLogIn }) => {

    const logOut = () => {
        localStorage.removeItem("userLoggedIn#10394e1")
        changeLogIn()
    }


    return (
        <header className="p-5">
            <nav className="navbar bg-light fixed-top">
                <div className="container-fluid">
                    <Link className="interviewsReports col-7" to="/home">
                        <h1 className="text-dark ms-5">
                            Interviews Reports
                        </h1>
                    </Link>
                    <div className="pagesButtons col-5">
                        <Link className="candidatesLinks" to="/home">
                            <button type="button" className="btnCandidates btn btn-light btn-outline-secondary me-5 ps-5 pe-5">
                                Candidates
                            </button>
                        </Link>

                        <Link className="reportsLinks" to="/reports">
                            <button type="button" className="btnReports btn btn-light btn-outline-secondary ps-5 pe-5">
                                Reports
                            </button>
                        </Link>

                        <button type="button" onClick={logOut} className="btnLogOut btn btn-light btn-outline-secondary ms-5 me-5 ps-5 pe-5">
                            Log Out
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};
