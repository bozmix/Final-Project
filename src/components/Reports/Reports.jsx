import "./Reports.css";
import { getReports } from "../../Services/getReports";
import { useEffect, useState } from "react/cjs/react.development";
import { getDate } from "../../Services/getDate";

export const Reports = (props) => {

    const [reports, setReports] = useState([]);

    useEffect(() => {
        getReports(props.token).then(reports => {
            setReports(reports.slice(0, 24))
        })
    }, [props.token])



    return (
        <>
            < div className="reportsPageDiv bg-light mb-5 pb-5" >
                {reports.map((report, index) => {
                    return (
                        <div className="singleCompanyCandidateReport bg-white p-1 ps-3 pe-3 ms-5 me-5" key={index}>

                            <div className="companyNameReport col-3"><div className="me-5 col fw-bold">{report.companyName}</div><div className="me-5 text-black-50">Company</div></div>

                            <div className="candidateNameReport col-4"><div className="me-5 fw-bold">{report.candidateName}</div><div className="me-5 text-black-50">Candidate</div></div>

                            <div className="interviewDateReport col-2"><div className="me-5 fw-bold">{getDate(report.interviewDate)}</div><div className="me-5 text-black-50">Interview Date</div></div>

                            <div className="statusReport col-2"><div className="me-5 fw-bold">{report.status}</div><div className="me-5 text-black-50">Status</div></div>

                            <div className="col-1 text-center">
                                <button className="me-5"><i className="far fa-eye "></i></button> <button className="me-2"><i className="fas fa-times"></i></button>
                            </div>

                        </div>
                    )
                })}
            </div >
        </>
    )
}