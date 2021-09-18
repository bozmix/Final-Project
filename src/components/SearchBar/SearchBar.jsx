import "./SearchBar.css";


export const SearchBar = ({ filterFunction }) => {

    return (
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1 ms-5 me-5">Candidates</span>
            <div className="form-inline ms-5 me-5">
                <input className="form-control mr-sm-2" id="searchInput" type="search" placeholder="Search" aria-label="Search" onChange={filterFunction}></input>
            </div>
        </nav>
    )
}