import React, { useState } from "react";

function SearchBar() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <div>
            <form className="searchBar" >
                <input
                    type="text"
                    placeholder="Search Products"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button type="submit">
                    Search
                </button>
            </form>
        </div>
    )
}

export default SearchBar;