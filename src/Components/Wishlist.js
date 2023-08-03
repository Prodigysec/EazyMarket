// Import the necessary libraries and the 'HeartFill' icon from 'react-bootstrap-icons'
import React from 'react';
import { HeartFill } from 'react-bootstrap-icons';

// Define the 'Wishlist' component and pass it props: 'wishlist' and 'onRemoveFromWishlist'
const Wishlist = ({ wishlist, onRemoveFromWishlist }) => {
  // Return the JSX (React elements) to be rendered on the screen
  return (
    <div>
      {/* Display the heart icon */}
      <h2>
        <HeartFill className="bi fs-4" />
      </h2>
      {/* Conditional rendering based on the wishlist length */}
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          {/* Map through the wishlist and display each product */}
          {wishlist.map((product) => (
            <li key={product.id}>
              {/* Display the product title */}
              {product.title}{' '}
              {/* Render the 'Remove' button with the 'onClick' event */}
              <button onClick={() => onRemoveFromWishlist(product.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Export the 'Wishlist' component so that other parts of the app can use it
export default Wishlist;
