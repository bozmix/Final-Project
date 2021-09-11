import { useState, useEffect } from "react";
import { getCandidates } from "../../Services/getCandidates";
import { getCompanies } from "../../Services/getCompanies";
import { getDate } from "../../Services/getDate";
import { getReports } from "../../Services/getReports";
import imagePlaceholder from "./assets/placeholderImage.png";
import loadingImage from "./assets/loadingScreen.gif";
import "./SingleCandidate.css";



export const SingleCandidate = ({ token }) => {


    const [candidates, setCandidates] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [reports, setReports] = useState([]);

    const candidate = candidates[0]

    useEffect(() => {
        getCandidates(token).then(candidates => {
            setCandidates(candidates)
        })
        getCompanies(token).then(companies => {
            setCompanies(companies)
        })
        getReports(token).then(reports => {
            setReports(reports)
        })
    }, [token])



    console.log(candidate)
    console.log(companies)
    console.log(reports)

    if (candidates.length < 1 && companies.length < 1 && reports.length < 1) {
        return (
            <div className="loadingImageDiv">
                <img className="loadingImage text-center" src={loadingImage} alt="Loading..." />
            </div>
        )
    } else {
        return (
            <>
                <div className="singleCandidateInfo row p-5">
                    <div className="profilePhoto col-4">
                        <img className="imagePlaceholder" src={imagePlaceholder} alt="candidateProfilePicture"></img>
                    </div>
                    <div className="nameEmail col-4 p-5">
                        <p className="fw-bold">Name:</p>
                        <p className="ms-3">{candidate.name}</p>
                        <p className="fw-bold">Email:</p>
                        <p className="ms-3">{candidate.email}</p>
                    </div>
                    <div className="birthEducation col-4 p-5">
                        <p className="fw-bold">Date of birth:</p>
                        <p className="ms-3">{getDate(candidate.birthday)}</p>
                        <p className="fw-bold">Education:</p>
                        <p className="ms-3">{candidate.education}</p>
                    </div>

                </div>
                <div className="singleCandidateReports m-5">
                    <table className="table table-striped table-hover">
                        <tbody>
                            <tr>
                                <td><i className="fas fa-caret-down"></i> Company</td>
                                <td><i className="fas fa-caret-down"></i> Interview Date</td>
                                <td colSpan="2"><i className="fas fa-caret-down"></i> Status</td>
                            </tr>
                            <tr>
                                <td className="col-4">{ }</td>
                                <td className="col-4">{ }</td>
                                <td className="col-3">{ }</td>
                                <td className="col-1 text-center"><button><i className="far fa-eye"></i></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>

        )
    }

}
