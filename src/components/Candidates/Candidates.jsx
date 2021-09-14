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
            <div className="container-fluid">
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1 ms-5">Candidates</span>
                    <div className="form-inline me-5">
                        <input className="form-control search text-muted" type="search" placeholder="...Search" aria-label="Search" onChange={filterCandidates}></input>
                    </div>
                </nav>
                </div>
                <div className="noUsersDiv">
                    <img className="noUsersImage text-center img-fluid mx-auto d-block" src={noUsersImage} alt="No users that match your search" />
                    <p className="text-center fw-bold fs-3">There are no users that match your search.</p>
                </div>
            </>
        )

    } else {
        return (
            <main className="backround">
            <search className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid raw me-5">
                    <span className="navbar-brand mb-0 h1 ms-5 col-sm-12 col-md-6 ">Candidates</span>
                    <div className="form-inline me-5">
                        <input className="form-control search ms-sm-5" type="search" placeholder="...Search" aria-label="Search" onChange={filterCandidates}></input>
                    </div>
                    </div>
                </nav>
                </search>

                <div class="container-fluid ">
                <div class="row justify-content-center ms-5 me-5">
                    {filteredCandidates.map((candidates2, index) => {
                        return (
                            <div class="col-md-6 col-lg-4 mb-5">
                            <Link to={`/SingleCandidate/${candidates2.id}`} key={index}>
                                <div class="mx-auto">
                                   <div class="d-flex align-items-center justify-content-center">
                                      <div class="text-center text-white">
                                   </div>
                                </div>
                                    <div class="card-box text-center">
                                    <div class="user-pic">
                                    <figure>
                                    <img className='img-responsive' src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' alt="profileCandidate" />
                                    </figure>
                                    </div>
                                    <h4>{(candidates2.name === undefined) ? "No name available" : candidates2.name}</h4>
                                    <h6>{(candidates2.email === undefined) ? "No data about email" : candidates2.email}</h6>
                                     </div>
                                </div>
                            </Link>
                            </div>
                        )
                    })}
                </div>
                </div>
            </main>
        )
    }
}


            
              
               
             
            
       
         