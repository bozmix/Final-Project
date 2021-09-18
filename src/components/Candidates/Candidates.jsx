import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { LoadingPage } from "../LoadingPage/LoadingPage";
import { useEffect } from "react/cjs/react.development";
import { getCandidates } from "../../Services/getCandidates";
import { NoUsers } from "../NoUsers/NoUsers";
import { SearchBar } from "../SearchBar/SearchBar";
import avatar from "./assets/avatar.png";
import "./Candidates.css";

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


    const filterFunction = (event) => {
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
                <SearchBar filterFunction={filterFunction} />
                <NoUsers />
            </>
        )
        : (
            <>
                <SearchBar setSearchTerm={setSearchQuery} filterFunction={filterFunction} />

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

