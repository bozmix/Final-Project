import { useState, useEffect } from "react";
import Modal from "react-modal";
import { getCandidates } from "../../Services/getCandidates";
import { getCompanies } from "../../Services/getCompanies";
import { getDate } from "../../Services/getDate";
import { getReports } from "../../Services/getReports";
import loadingImage from "./assets/loadingScreen.gif";
import { getSingleCandidate } from "../../Services/getSingleCandidate";
import { ModalComponent } from "../ModalComponent/ModalComponent";
import "./SingleCandidate.css";




export const SingleCandidate = (props) => {


    const [candidates, setCandidates] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [reports, setReports] = useState([]);
    const [candidate, setCandidate] = useState({});
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [singleReport, setSingleReport] = useState([]);

    let singleCompany = localStorage.getItem("modalNibble");



    useEffect(() => {
        getCandidates(props.token).then(candidates => {
            setCandidates(candidates)
        })
        getCompanies(props.token).then(companies => {
            setCompanies(companies)
        })
    }, [props.token])




    useEffect(() => {
        getSingleCandidate(props.match.params.id, props.token).then((candidate) => {
            setCandidate(candidate)
            getReports(props.token).then(reports => {
                const filtRep = reports.filter((report) => report.candidateId === candidate.id)
                setReports(filtRep)
            })
            reports.forEach((report) => {
                if (report.companyName === singleCompany) {
                    setSingleReport(report)
                }
            })
        })
    }, [])



    if (candidates.length < 1 && companies.length < 1 && reports.length < 1 && singleReport.length < 1) {
        return (
            <div className="loadingImageDiv">
                <img className="loadingImage text-center" src={loadingImage} alt="Loading..." />
            </div>
        )
    } else {
        return (
            <>
                <div className="singleCandidateInfo row p-5">
                    <div className="profilePhoto col-sm-12 col-md-4">
                       <div class="user-pic">
                            <figure>
                                <img
                                    src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png
                                    "
                                    class="img-responsive"
                                    alt="candidateProfilePicture"
                                ></img>
                            </figure>
                        </div>
                    </div>
                    <div className="nameEmail col-sm-12 col-md-4 my-auto">
                        <h4 className="fw-bold">Name:</h4>
                        <p className="ms-3">{candidate.name}</p>
                        <h4 className="fw-bold">Email:</h4>
                        <p className="ms-3">{candidate.email}</p>
                    </div>
                    <div className="birthEducation col-4 my-auto">
                        <h4 className="fw-bold">Date of birth:</h4>
                        <p className="ms-3">{getDate(candidate.birthday)}</p>
                        <h4 className="fw-bold">Education:</h4>
                        <p className="ms-3">{candidate.education}</p>
                    </div>
                </div>

                <Modal
                    autoFocus={true}
                    centered={true}
                    keyboard={true}
                    restoreFocus={true}
                    shouldCloseOnOverlayClick={false}
                    isOpen={modalIsOpen}
                    style={{
                        overlay: {
                            backgroundColor: 'rgba(1, 1, 1, 0.75)',
                            padding: "none",
                        },
                        content: {
                            width: '50%',
                            height: "fit-content",
                            top: '30%',
                            left: '25%',
                          
                        }
                    }}>
                    <ModalComponent reports={reports} setModalIsOpen={setModalIsOpen} />
                </Modal>


                <div className="singleCandidateReports mx-5  mb-5">
                    <table className="table table-striped table-hover">
                        <tbody>
                            <tr>

                                <th><i className="fas fa-caret-down"></i> Company</th>
                                <th><i className="fas fa-caret-down"></i> Interview Date</th>
                                <th colSpan="2"><i className="fas fa-caret-down"></i> Status</th>
                            </tr>

                            {reports.map((report, index) => (
                                < tr className="col-4" key={index}>
                                    <td className="col-4">{report.companyName}</td>
                                    <td className="col-4">{getDate(report.interviewDate)}</td>
                                    <td className="col-3">{report.status}</td>
                                    <td className="col-1 text-center"><button className={report.companyName}
                                        onClick={() => {
                                            setModalIsOpen(true)
                                            localStorage.setItem("modalNibble", report.companyName)
                                        }} ><i className="far fa-eye"></i></button></td>
                                </tr>

                            ))
                            }

                        </tbody>
                    </table>
                </div>
            </>
        )
    }

}
