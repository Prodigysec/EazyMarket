import React, { useState, useContext } from "react";
import { ProductsContext } from '../Context/ProductsContext';
import ProductCard from '../Components/ProductCard';

function SearchBar() {
    const [inputValue, setInputValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const { searchProduct } = useContext(ProductsContext);


    const handleSearch = () => {
        const results = searchProduct(inputValue);
        if (inputValue.trim() !== "") {
            setSearchResults(results);
        } else {
            // Handle empty inputValue
        }
    }

    return (
        <>
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
            {searchResults.map((product) => (
                <ProductCard product={product} />
            ))}
        </>
    )
}

export default SearchBar;