import React, { useState } from "react";
import "./Candidates.css";
import { Link } from 'react-router-dom';

export const Candidates = ({candidates}) => {

    const [filteredCandidates, setFilteredCandidates] = useState(candidates);

    const filterCandidates = (event) => {
        const filterCand = candidates.filter(candidate => {
            return candidate.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setFilteredCandidates(filterCand)
        console.log(filteredCandidates)
    }
  
    if (candidates.length < 1) {
        return (
            <div className="loadingImageDiv">
                <img className="loadingImage text-center" src='https://github.com/SlobodanStojkovic/react-bit-people/blob/main/src/Components/Main/assets/loadingScreen.gif' alt="Loading..." />
            </div>
        )
    } else {
        return (
            <>
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1">Candidates</span>
                    <div className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={filterCandidates}></input>
                    </div>
                </nav>
    
                <div className='candidates'>
                    {filteredCandidates.map(candidates2 => {
                        return (
                            <Link to={`/SingleCandidate/${candidates2.id}`}>
                            <div className='candidate'>
                                <div className='image'>
                                    <img src='https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png'/>
                                </div>
                                <h4>{candidates2.name}</h4>
                                <p>{candidates2.email}</p>
                            </div>
                            </Link>
                        )
                    })}
                </div>
            </>
        )
    }


    
}