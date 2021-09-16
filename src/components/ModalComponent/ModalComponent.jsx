import "./ModalComponent.css";
import { getDate } from "../../Services/getDate";



export const ModalComponent = ({ reports, setModalIsOpen }) => {

    let singleCompany = localStorage.getItem("modalNibble");
    let singleReport = [];

    reports.forEach((report) => {
        if (report.companyName === singleCompany) {
            singleReport.push(report)
        }
    })



    return (
        <div className="containerModal">

            <p className="topModalInfo ms-5 mt-3 h3 mb-3">{singleReport[0].candidateName}</p>
            <button onClick={() => setModalIsOpen(false)} className="closeButtonModal col-1 mb-0"><i className="far fa-times-circle fa-2x"></i></button>
            <hr className="hrLineModal" />

            <div className="row popUp">
                <div className="candidateInfoPopUp ms-lg-5 col-sm-4">
                    <p className="m-0 mt-2 text-black-50">Company</p>
                    <p className="m-0 h4 mb-2">{singleReport[0].companyName}</p>
                    <p className="m-0 text-black-50">Interview Date</p>
                    <p className="m-0 h4 mb-2">{getDate(singleReport[0].interviewDate)}</p>
                    <p className="m-0 text-black-50">Phase</p>
                    <p className="m-0 h4 mb-2">{singleReport[0].phase}</p>
                    <p className="m-0 text-black-50">Status</p>
                    <p className="m-0 mb-3 h4 mb-2">{singleReport[0].status}</p>
                </div>

                <div className="candidateNotes me-5 col-sm-6">
                    <p className="m-0 mb-1 mt-2 text-black-50 notesModal">Notes</p>
                    <p className="m-0 mb-3 notesTextModal">{singleReport[0].note}</p>
                </div>
            </div>
        </div >
    )
}
