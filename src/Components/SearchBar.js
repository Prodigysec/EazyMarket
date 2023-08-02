import React, { useState, useContext } from "react";
import { ProductsContext } from '../Context/ProductsContext';

function SearchBar() {
    const [inputValue, setInputValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const { searchProduct } = useContext(ProductsContext);


    const handleSearch = () => {
        const results = searchProduct(inputValue);
        setSearchResults(results);
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Search Products"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" onClick={handleSearch}>
                Search
            </button>
        </div>
    )
}

export default SearchBar;