// First, we are bringing in some special tools we need to build our web page.
// The 'React' tool is like magic for making things on the screen change when we interact with them.
import React, { useState } from 'react';

// Then, we are getting some special design elements to make our search bar look nice.
import { Navbar, Form, Button, FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

// Now, we want to make something called a "SearchBar".
// A SearchBar is like a little box where we can type what we want to find on our web page.
function SearchBar({ setSearchQuery }) {

  // Inside our SearchBar, we need to keep track of what we type in the box.
  // So, we use a special tool called 'useState', which gives us a special box to store the typed words.
  const [inputValue, setInputValue] = useState('');

  // We also need something magical to happen when we click a special button in the box.
  // So, we create a special function called 'handleSearch' that will do something when we click the button.
  const handleSearch = () => {
    // When we click the button, this function will take what we typed and send it to another place (a parent).
    // It's like sending a message to tell the parent what we are looking for.
    setSearchQuery(inputValue);
  };

  // Now, we want to show the box with the button on our web page.
  // We use special design elements like 'Navbar', 'Form', 'Button', and 'FormControl'.
  return (
    // The 'Navbar' is like a special bar at the top of the web page.
    // Inside the Navbar, we have a 'Form' that holds the search box and the button.
    // 'Form' is like a box that contains other things like a search box and a button.
    <Navbar bg="light" expand="lg">
      {/* This button is like a little menu that opens for smaller screens */}
      {/* We don't need to worry about this button for now. */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {/* The 'Navbar.Collapse' is where we put the things we want to show inside the bar. */}
      <Navbar.Collapse id="basic-navbar-nav">
        {/* This 'Form' element is where our search box and button live. */}
        <Form inline className="ml-auto">
          {/* The 'FormControl' is like the box where we type what we want to search for. */}
          {/* It has some special things inside like a 'type' (text) and a 'placeholder' (hint). */}
          {/* The 'value' inside the box is connected to our special box (state) called 'inputValue'. */}
          {/* Whatever we type in the box, the special box will remember it! */}
          <FormControl
            type="text"
            placeholder="Search Products"
            value={inputValue}
            // When we type something in the box, this special thing (event handler) notices it and tells our special box to remember what we typed.
            onChange={(e) => setInputValue(e.target.value)}
            className="mr-sm-2"
          />
          {/* This is like a magical button with a magnifying glass on it. */}
          {/* When we click this button, something exciting will happen! */}
          {/* The button uses our special 'handleSearch' function to do something special. */}
          <Button variant="outline-primary" onClick={handleSearch}>
            <FaSearch /> {/* The magnifying glass icon */}
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

// Finally, we make our special 'SearchBar' available for other parts of the web page to use.
// It's like sharing our creation with others so they can have a cool search box too!
export default SearchBar;
