import "./Success.css";
import { Link } from "react-router-dom";

export const Success = () => {
    return (
        <>
            <div className="h1 ms-5">You have succesfully created new report!</div>
            <div className="BackAndNextButtons position-relative m-5">
                <Link to={`/reports`} >
                    <button className="btn btn-info p-3 ps-5 pe-5 position-absolute bottom-0 end-0 ms-5">Back to reports</button>
                </Link>
            </div>
        </>
    )
}