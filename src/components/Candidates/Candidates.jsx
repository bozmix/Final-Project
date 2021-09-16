import React, { useState } from "react";
import { Link } from 'react-router-dom';
import loadingImage from "./assets/loadingScreen.gif";
import noUsersImage from "./assets/noUsersImage.jpg";
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
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1 ms-5 me-5">Candidates</span>
                    <div className="form-inline ms-5 me-5">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={filterCandidates}></input>
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

                <div className='candidates ms-5'>
                    {filteredCandidates.map((candidates2, index) => {
                        return (
                            <Link to={`/single-candidate/${candidates2.id}`} key={index}>
                                <div className='candidate'>
                                    <div className='image'>
                                        <img src='https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png' alt="profileCandidate" />
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