import noUsersImage from "./assets/noUsersImage.jpg";
import "./NoUsers.css";

export const NoUsers = () => {

    return (
        <>

            <div className="noUsersDiv">
                <img className="noUsersImage text-center img-fluid mx-auto d-block" src={noUsersImage} alt="No users that match your search" />
                <p className="text-center fw-bold fs-3">There are no users that match your search.</p>
            </div>
        </>
    )
}