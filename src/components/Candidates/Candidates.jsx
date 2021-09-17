import React, { useState } from "react";
import { Link } from 'react-router-dom';
import loadingImage from "./assets/loadingScreen.gif";
import noUsersImage from "./assets/noUsersImage.jpg";
import avatar from "./assets/avatar.png";
import "./Candidates.css";

export const Candidates = ({ candidates }) => {

    const [filteredCandidates, setFilteredCandidates] = useState(candidates);


    const filterCandidates = (event) => {
        const filterCand = candidates.filter(candidate => {
            return candidate.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setFilteredCandidates(filterCand)
    }



    if (candidates.length < 1) {
        return (
            <div className="loadingImageDiv">
                <img className="loadingImage text-center" src={loadingImage} alt="Loading..." />
            </div>
        )
    } else if (filteredCandidates.length < 1) {
        return (
            <>
                <nav className="navbar navbar-light bg-light col-xs-12 fixed-top">
                    <span className="navbar-brand mb-0 h1 ms-5 me-5">Candidates</span>
                    <div className="form-inline ms-5 me-5">
                        <input className="form-control col-xs-12 me-xs-1" type="search" placeholder="Search" aria-label="Search" onChange={filterCandidates}></input>
                    </div>
                </nav>
                <div className="noUsersDiv">
                    <img className="noUsersImage text-center img-fluid mx-auto d-block" src={noUsersImage} alt="No users that match your search" />
                    <p className="text-center fw-bold fs-3">There are no users that match your search.</p>
                </div>
            </>
        )
    } else {
        return (
            <>
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1 ms-5 me-5">Candidates</span>
                    <div className="form-inline ms-5 me-5">
                        <input className="form-control mr-sm-2" id="searchInput" type="search" placeholder="Search" aria-label="Search" onChange={filterCandidates}></input>
                    </div>
                </nav>

                <div className='candidates ps-xs-1 pe-xs-1 ps-sm-5 pe-sm-5 ps-md-5 pe-md-5 ps-xl-5 pe-xl-5 ms-5 mx-xs-auto mx-sm-auto mx-md-auto mx-lg-auto'>
                    {filteredCandidates.map((candidates2, index) => {
                        return (
                            <Link to={`/single-candidate/${candidates2.id}`} key={index}>
                                <div className="candidate  col-xs-12">
                                    <div className='image'>
                                        <img src={avatar} alt="profileCandidate" />
                                    </div>
                                    <h4>{(candidates2.name === undefined) ? "No name available" : candidates2.name}</h4>
                                    <p>{(candidates2.email === undefined) ? "No data about email" : candidates2.email}</p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </>
        )
    }



}