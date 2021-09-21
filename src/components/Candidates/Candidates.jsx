import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    const [searchQuery, setSearchQuery] = useState("");
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

                <div className="candidates ps-sm-1 ps-md-5 row">
                    {filteredCandidates.map((candidates2, index) => {
                        return (
                            <div className="candidateLink col-xs-6 col-sm-6 col-md-4 col-lg-3">
                                <Link to={`/single-candidate/${candidates2.id}`} key={index}>
                                    <div className="candidate">
                                        <div className="candidateImageDiv">
                                            <img src={avatar} alt="profileCandidate" />
                                        </div>
                                        <h4>{(candidates2.name === undefined) ? "No name available" : candidates2.name}</h4>
                                        <p>{(candidates2.email === undefined) ? "No data about email" : candidates2.email}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </>
        )
}

