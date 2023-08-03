// We import necessary tools from React and the logo image.
import React from "react";
import logo2 from '../images/Logo-2.png'

// We define a new component called 'Footer1'.
const Footer1 = () => {
  // Inside the 'Footer1' component, we return the JSX (React elements) to be rendered on the screen.
  return (
    <div className="bg-dark text-white" style={{paddingTop: "50px", paddingBottom: "10px"}}>
      {/* The 'container' is like a special box that holds everything inside it. */}
      <div className="container">
        {/* Inside the 'container', we have a 'row' that holds four columns. */}
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-3 col-sm-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            {/* We show the logo image inside this column. */}
            <img src={logo2} className="App-logo" alt="logo" style={{width: '150px'}} />
          </div>

          {/* Column 2 */}
          <div className="col-md-3 col-sm-6">
            {/* We show some information about the company inside this column. */}
            <h4 style={{color:'orange', paddingBottom:"50px"}}>About us</h4>
            <p>Easy Market is your one stop store <br/>
              for your favourite range of goods<br/>
              We stock a wide variety of products <br/>
              ranging from electronic appliances<br/>
              to the latest in designer fashion for<br/>
              both men and women.</p>
          </div>

          {/* Column 3 */}
          <div className="col-md-3 col-sm-6">
            {/* We show a list of categories inside this column. */}
            <h4 style={{color:'orange', paddingBottom:"50px"}}>Our Categories</h4>
            <ul className="list-unstyled">
              <li>Electronics</li>
              <li>Jewelry</li>
              <li>Mens wear</li>
              <li>Ladies wear</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-md-3 col-sm-6">
            {/* We show contact information inside this column. */}
            <h4 style={{color:'orange',paddingBottom:"50px"}}>Contact us</h4>
            <ul className="list-unstyled">
              <li>Tel: 0712 123 123</li>
              <li>Email: info@esymarket.com</li>
              <li>Facebook: easymarkert</li>
              <li>Instagram: Easy Market</li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="col-md-3 col-sm-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
          {/* We show the copyright information at the bottom of the footer. */}
          <p className="text-xs-center pl-6" style={{color: 'orange', fontSize: '12px'}}>All Rights Reserved &copy; 2023 EazyMarket </p>
        </div>

      </div>
    </div>
  );
}

// We export the Footer1 component so that other parts of the app can use it.
export default Footer1;
