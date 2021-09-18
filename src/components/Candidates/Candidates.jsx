import React, { useState } from "react";
import { Link } from "react-router-dom";
import loadingImage from "./assets/loadingScreen.gif";
import noUsersImage from "./assets/noUsersImage.jpg";
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

export const Candidates = ({ candidates }) => {
  const [filteredCandidates, setFilteredCandidates] = useState(candidates);

  const filterCandidates = (event) => {
    const filterCand = candidates.filter((candidate) => {
      return candidate.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setFilteredCandidates(filterCand);
  };
  if (candidates.length < 1) {
    return (
      <div className="loadingImageDiv">
        <img
          className="loadingImage text-center"
          src={loadingImage}
          alt="Loading..."
        />
      </div>
    );
  } else if (filteredCandidates.length < 1) {
    return (
      <>
        <div className="container-fluid mb-5">
          <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1 ms-5">Candidates</span>
            <div className="form-inline me-5">
              <input
                className="form-control search text-center"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={filterCandidates}
              ></input>
            </div>
          </nav>
        </div>
        <div className="noUsersDiv">
          <img
            className="noUsersImage text-center img-fluid mx-auto d-block"
            src={noUsersImage}
            alt="No users that match your search"
          />
          <p className="text-center fw-bold fs-3">
            There are no users that match your search.
          </p>
        </div>
      </>
    );
  } else {
    return (
      <main className="backround ">
        <div className="d-flex search flex-row justify-content-between mx-5">
          <span className="h3 mt-3 col-sm-12 col-md-6 mx-3">Candidates</span>
          <div className="form-inline col-sm-2">
            <input
              className="form-control search mt-3 me-3"
              type="search"
              placeholder="...Search"
              aria-label="Search"
              onChange={filterCandidates}
            ></input>
          </div>
        </div>
        <hr></hr>

        <div className="container-fluid ">
          <div className="row justify-content-center ms-5 me-5">
            {filteredCandidates.map((candidates2, index) => {
              return (
                <div className="col-md-6 col-lg-4 mb-5">
                  <Link to={`/SingleCandidate/${candidates2.id}`} key={index}>
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
              );
            })}
          </div>
        </div>
      </main>
    );
  }
};
