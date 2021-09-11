import { useState, useEffect } from "react";
import { getCandidates } from "../../Services/getCandidates";
import { getCompanies } from "../../Services/getCompanies";
import { getDate } from "../../Services/getDate";
import { getReports } from "../../Services/getReports";
import imagePlaceholder from "./assets/placeholderImage.png";
import loadingImage from "./assets/loadingScreen.gif";
import { getSingleCandidate } from "../../Services/getSingleCandidate";
import "./SingleCandidate.css";



export const SingleCandidate = (props) => {


    const [candidates, setCandidates] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [reports, setReports] = useState([]);
    const [candidate, setCandidate] = useState({});


    useEffect(() => {
        getCandidates(props.token).then(candidates => {
            setCandidates(candidates)
        })
        getCompanies(props.token).then(companies => {
            setCompanies(companies)
        })

    }, [])





    useEffect(() => {
        getSingleCandidate(props.match.params.id, props.token).then((candidate) => {
            setCandidate(candidate)
            getReports(props.token).then(reports => {
                const filtRep = reports.filter((report) => report.candidateId === candidate.id)
                setReports(filtRep)
            })
        })
    }, [])



    console.log("filteredReports", reports)
    console.log("candidate", candidate)
    console.log("companies", companies)


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
                                
                                <th><i className="fas fa-caret-down"></i> Company</th>
                                <th><i className="fas fa-caret-down"></i> Interview Date</th>
                                <th colSpan="2"><i className="fas fa-caret-down"></i> Status</th>
                            </tr>

                            {reports.map((report, index) => (
                                <tr>
                                    <td className="col-4">{report.companyName}</td>
                                    <td className="col-4">{getDate(report.interviewDate)}</td>
                                    <td className="col-3">{report.status}</td>
                                    <td className="col-1 text-center"><button><i className="far fa-eye"></i></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </>

        )
    }

}
