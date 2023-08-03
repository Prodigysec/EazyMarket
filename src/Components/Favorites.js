// We're importing necessary tools from React and the 'react-bootstrap-icons' library.
import React from 'react';
import { StarFill } from 'react-bootstrap-icons';

// We define a new component called 'Favorites'.
// This component receives two special messages (props): 'favorites' and 'onRemoveFromFavorites'.
const Favorites = ({ favorites, onRemoveFromFavorites }) => {
  // When we're inside the 'Favorites' component, we do the following:

  // We return a bunch of things wrapped in a special box (div element).
  return (
    <div>
      {/* We put a big heading (h2) that shows a favorite icon (a star) using the 'StarFill' component from 'react-bootstrap-icons'. */}
      <h2>
        <StarFill className="bi fs-4" />
      </h2>

      {/* Now we check if there are any favorite products. */}
      {/* If there are no favorites, we show a nice message. */}
      {favorites.length === 0 ? (
        <p>Your favorites list is empty.</p>
      ) : (
        // If there are favorites, we create a list (ul) to display them.
        <ul>
          {/* For each favorite product, we create a list item (li). */}
          {favorites.map((product) => (
            <li key={product.id}>
              {/* Inside each list item, we show the product's title and a special button (a box that you can click). */}
              {product.title} 
              {/* When we click the button, it will call a special magic spell (function) called 'onRemoveFromFavorites'. */}
              {/* We give the spell the 'id' of the product as a message (prop). */}
              <button onClick={() => onRemoveFromFavorites(product.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// After all this magic, we want to share our special 'Favorites' box with others, so they can use it too!
export default Favorites;
