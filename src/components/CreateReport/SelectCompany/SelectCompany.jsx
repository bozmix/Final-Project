import "./SelectCompany.css";
import { Link } from "react-router-dom";
import numberOne from "../assets/numberOneInCircle.png";
import numberTwo from "../assets/numberTwoInCircle.png";
import numberThree from "../assets/numberThreeInCircle.png";
import { getCompanies } from "../../../Services/getCompanies";
import { useEffect, useState } from "react/cjs/react.development";


export const SelectCompany = ({ stepBack, nextStep }) => {

    const [companies, setCompanies] = useState([]);

    let token = localStorage.getItem("tokenNibble");

    useEffect(() => {
        getCompanies(token)
            .then(data => setCompanies(data))

    }, [token])
    console.log(companies)

    return (
        <>
            <div className="row">
                <div className="steps border-end border-dark col-4">
                    <div className="m-5">
                        <p className="fs-3"><img className="numberOne m-3" src={numberOne} alt="" /> Select Candidate</p>
                        <p className="fw-bold fs-3"><img className="numberTwo m-3" src={numberTwo} alt="" /> Select Company</p>
                        <p className="fs-3"><img className="numberThree m-3" src={numberThree} alt="" /> Fill Report Details</p>
                    </div>
                </div>
                <div className="companies col-7">
                    {companies.map(company => (
                        <p>{company.name}</p>
                    ))}
                </div>
            </div>
            <div className="BackAndNextButtons position-relative">
                <button className="btn btn-info p-3 ps-5 pe-5 position-absolute bottom-0 start-0 ms-5" onClick={stepBack}>BACK</button>
                <button className="btn btn-info p-3 ps-5 pe-5 position-absolute bottom-0 end-0 me-5" onClick={nextStep}>NEXT</button>
            </div>
        </>
    )
}