import "./FillReportDetails.css";
import numberOne from "../assets/numberOneInCircle.png";
import numberTwo from "../assets/numberTwoInCircle.png";
import numberThree from "../assets/numberThreeInCircle.png";

export const FillReportDetails = ({stepBack, nextStep}) => {
    return (
        <>
            <div className="steps border-end border-dark col-4">
                <div className="m-5">
                    <p className="fs-3"><img className="numberOne m-3" src={numberOne} alt="" /> Select Candidate</p>
                    <p className="fs-3"><img className="numberTwo m-3" src={numberTwo} alt="" /> Select Company</p>
                    <p className="fw-bold fs-3"><img className="numberThree m-3" src={numberThree} alt="" /> Fill Report Details</p>
                </div>
            </div>

            <div className="BackAndNextButtons position-relative">

                    <button className="btn btn-info p-3 ps-5 pe-5 position-absolute bottom-0 start-0 ms-5" onClick={stepBack}>BACK</button>



                    <button className="btn btn-info p-3 ps-5 pe-5 position-absolute bottom-0 end-0 me-5" onClick={nextStep}>SUBMIT</button>

            </div>
        </>
    )
}