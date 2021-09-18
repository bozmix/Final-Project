import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { LoadingPage } from "../LoadingPage/LoadingPage";
import { useEffect } from "react/cjs/react.development";
import { getCandidates } from "../../Services/getCandidates";
import { NoUsers } from "../NoUsers/NoUsers";
import { SearchBar } from "../SearchBar/SearchBar";

import "./Candidates.css";

import avatar0 from "./assets/avatar0.jpg";
import avatar1 from "./assets/avatar1.jpg";
import avatar2 from "./assets/avatar2.jpg";
import avatar3 from "./assets/avatar3.jpg";
import avatar4 from "./assets/avatar4.jpg";
import avatar5 from "./assets/avatar5.jpg";
import avatar6 from "./assets/avatar6.jpg";

export const projects = [
  { photo: avatar0 },
  { photo: avatar1 },
  { photo: avatar2 },
  { photo: avatar3 },
  { photo: avatar4 },
  { photo: avatar5 },
  { photo: avatar6 },
];


export const Candidates = () => {

    const [candidates, setCandidates] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCandidates, setFilteredCandidates] = useState([]);

    let token = localStorage.getItem("tokenNibble")


    useEffect(() => {
        getCandidates(token).then(candidates => {
            setCandidates(candidates)
            setFilteredCandidates(candidates)
            setIsLoading(false);
        })
    }, [])

    useEffect(() => {
        const filtCandidates = candidates.filter(candidate => {
            return candidate.name.toLowerCase().includes(searchQuery)
        })
        setFilteredCandidates(filtCandidates)
    }, [searchQuery])


    const filterCandidates = (event) => {
        setSearchQuery(event.target.value.trim().toLowerCase())
    }


    if (isLoading) {
        return (
            <LoadingPage />
        )
    }

    return !isLoading && filteredCandidates.length === 0
        ? (
            <>
                <SearchBar setSearchTerm={setSearchQuery} filterCandidates={filterCandidates} />
                <NoUsers />
            </>
        )
        : (
            <>
                <SearchBar setSearchTerm={setSearchQuery} filterCandidates={filterCandidates} />

                <div className="container-fluid ">
                <div className="row justify-content-center ms-5 me-5">
                    {filteredCandidates.map((candidates2, index) => {
                        return (
                          <div className="col-md-6 col-lg-4 mb-5">
                            <Link to={`/single-candidate/${candidates2.id}`} key={index}>
                                 <div className="mx-auto">
                      <div className="d-flex align-items-center justify-content-center">
                        <div className="text-center text-white"></div>
                      </div>
                      <div className="card-box text-center">
                        <div className="user-pic">
                          <figure>
                            <img
                              className="img-responsive"
                              src={projects[index].photo}
                              alt=""
                            />
                          </figure>
                        </div>
                        <h4>
                          {candidates2.name === undefined
                            ? "No name available"
                            : candidates2.name}
                        </h4>
                        <h6>
                          {candidates2.email === undefined
                            ? "No data about email"
                            : candidates2.email}
                        </h6>
                      </div>
                    </div>
                            </Link>
                            </div>
                        )
                        
                    })}
                    </div>
                    
                </div>
            </>
        )
}