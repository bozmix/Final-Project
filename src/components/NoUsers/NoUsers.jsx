import "./NoUsers.css";

export const NoUsers = () => {

    return (
        <>
            <div className="noUsersDiv">
                <img className="noUsersImage text-center img-fluid mx-auto d-block" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="No users that match your search" />
                <p className="text-center fw-bold fs-3">There are no users that match your search.</p>
            </div>
        </>
    )
}