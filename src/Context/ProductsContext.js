import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext()

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    })

    const searchProduct = (productName) => {
        const filteredProducts = products.filter((product) =>
            product.title.toLowerCase().includes(productName.toLowerCase())
        );
        return filteredProducts;
    };

    return (
        <ProductsContext.Provider value={{ products, searchProduct }}>
            {children}
        </ProductsContext.Provider>
    );
}

export default ProductsProvider;