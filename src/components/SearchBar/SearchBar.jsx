
export const SearchBar = ({ filterCandidates }) => {

    return (
        <div className="d-flex search flex-row justify-content-between mx-5">
            <span className="h3 mt-3 col-sm-12 col-md-6 mx-3">Candidates</span>
            <div className="form-inline col-sm-2">
              <input
                className="form-control search mt-3 me-3"
                type="search"
                placeholder="...Search"
                aria-label="Search"
                onChange={filterCandidates}
              ></input>
            </div> </div>
            
          
          
    )
}