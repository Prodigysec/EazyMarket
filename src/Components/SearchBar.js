import React from "react";

function SearchBar() {

    return (
        <div>
            <form className="searchBar" >
                <input
                    type="text"
                    placeholder="Search Products"
                />
                <button type="submit">
                    Search
                </button>
            </form>
        </div>
    )
}

export default SearchBar;