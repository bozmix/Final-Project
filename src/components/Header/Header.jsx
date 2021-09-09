import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";


export const Header = () => {
    return (
        <header className="p-5">
            <nav className="navbar bg-light fixed-top">
                <div className="container-fluid">
                    <Link className="interviewsReports" to="/home">
                        <h1 className="text-dark ms-5">
                            Interviews Reports
                        </h1>
                    </Link>
                    <Link className="candidates" to="/home">
                        <button type="button" className="btn btn-light btn-outline-secondary me-5 ps-5 pe-5">
                            Candidates
                        </button>
                    </Link>
                </div>
            </nav>
        </header>
    );
};
