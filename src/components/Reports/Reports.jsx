import "./Reports.css";
import { getReports } from "../../Services/getReports";
import { useEffect, useState } from "react/cjs/react.development";
import { getDate } from "../../Services/getDate";
import Modal from "react-modal";
import { ModalComponent } from "../ModalComponent/ModalComponent";

export const Reports = (props) => {

    const [reports, setReports] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        getReports(props.token).then(reports => {
            setReports(reports.slice(0, 24))
        })
    }, [props.token, reports])


    const deleteRequest = (token) => {
        let reportId = localStorage.getItem("modalNibble");
        return fetch("http://localhost:3333/api/reports/" + reportId, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
            .then(data => data.json())
            .then(info => info)
    }


    return (
        <>
            < div className="reportsPageDiv bg-light mb-5 pb-5" >
                <Modal
                    autoFocus={true}
                    centered={true}
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
                {reports.map((report, index) => {
                    return (
                        <div className="singleCompanyCandidateReport bg-info p-1 ps-3 pe-3 ms-5 me-5 m-2" key={index}>

                            <div className="companyNameReport col-3"><div className="me-5 col fw-bold">{report.companyName}</div><div className="me-5 text-black-50">Company</div></div>

                            <div className="candidateNameReport col-4"><div className="me-5 fw-bold">{report.candidateName}</div><div className="me-5 text-black-50">Candidate</div></div>

                            <div className="interviewDateReport col-2"><div className="me-5 fw-bold">{getDate(report.interviewDate)}</div><div className="me-5 text-black-50">Interview Date</div></div>

                            <div className="statusReport col-2"><div className="me-5 fw-bold">{report.status}</div><div className="me-5 text-black-50">Status</div></div>

                            <div className="col-1 text-center">
                                <button className={report.companyName} onClick={() => {
                                    setModalIsOpen(true)
                                    localStorage.setItem("modalNibble", report.id)
                                }} className="me-5"><i className="far fa-eye "></i></button> <button onClick={() => {
                                    localStorage.setItem("modalNibble", report.id)
                                    deleteRequest(props.token)
                                }} className="me-2"><i className="fas fa-times"></i></button>
                            </div>

                        </div>


                    )
                })}
            </div >
        </>
    )
}