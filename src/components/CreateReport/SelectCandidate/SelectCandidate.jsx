import numberOne from "../assets/numberOneInCircle.png";
import numberTwo from "../assets/numberTwoInCircle.png";
import numberThree from "../assets/numberThreeInCircle.png";
import { getCandidates } from "../../../Services/getCandidates";
import { useEffect, useState } from "react/cjs/react.development";
import avatar from "../../Candidates/assets/avatar.png";
import { Link } from "react-router-dom";
import "./SelectCandidate.css";

export const SelectCandidate = ({ nextStep, selectedCandidate, setSelectedCandidate }) => {

    const [candidates, setCandidates] = useState([]);

    let token = localStorage.getItem("tokenNibble");


    useEffect(() => {
        getCandidates(token)
            .then(candidates => setCandidates(candidates))
    }, [])


    const validateSelectCandidate = () => {
        if (selectedCandidate.length !== 0) {
            nextStep()
        } else {
            alert("Please select candidate")
        }
    }



    return (
        <>
            <div className="row">
                <div className="steps border-end border-dark col-xs-12 col-sm-12 col-md-4">
                    <div className="m-5">

                        <Link className="selectWizardLinks" to="/create/1">
                            <p className="fw-bold fs-3"><img className="numberOne m-3" src={numberOne} alt="" /> Select Candidate</p>
                        </Link>


                        {(selectedCandidate.length !== 0) ?
                            <Link className="selectWizardLinks" to="/create/2">
                                <p className="fs-3"><img className="numberTwo m-3" src={numberTwo} alt="" /> Select Company</p>
                            </Link>
                            :
                            <p className="fs-3"><img className="numberTwo m-3" src={numberTwo} alt="" /> Select Company</p>
                        }

                        {(selectedCandidate.length !== 0) ?
                            <Link className="selectWizardLinks" to="/create/3">
                                <p className="fs-3"><img className="numberThree m-3" src={numberThree} alt="" /> Fill Report Details</p>
                            </Link>
                            :
                            <p className="fs-3"><img className="numberThree m-3" src={numberThree} alt="" /> Fill Report Details</p>
                        }

                        <hr />
                        <p className="ms-5 fs-3">Candidate:</p>
                        <p className="ms-5 fw-bold fs-1">{selectedCandidate.name}</p>
                    </div>
                </div>
                <div className="selectCandidates col-8">
                    {candidates.map((candidate, index) => {
                        return (
                            <div className="oneCandidateToSelect bg-light d-inline-block col-5 p-1 m-3 me-1" id={candidate.id}
                                onClick={() => setSelectedCandidate(candidate)} key={index}>
                                <img className="smallAvatar col-3 mb-3" src={avatar} alt="" />
                                <div className="d-inline-block m-3">
                                    <p className="">{candidate.name}</p>
                                    <p className="">{candidate.email}</p>
                                </div>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
            <div className="BackAndNextButtons position-relative">

                <button className="btn btn-info p-3 ps-5 pe-5 position-absolute bottom-0 end-0 me-5" onClick={validateSelectCandidate}>NEXT</button>

            </div>
        </>
    )
}