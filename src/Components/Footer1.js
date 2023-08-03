import React from "react";
import logo2 from '../images/Logo-2.png'

const Footer1 = () => {
  return (
    <div className="bg-dark text-white" style={{paddingTop: "50px", paddingBottom: "10px"}}>
        <div className="container">
            <div className="row">
                
                {/*column 1*/}
                <div className="col-md-3 col-sm-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                <img src={logo2} className="App-logo" alt="logo" style={{width: '150px'}} />
                
                </div>

                {/* Column 2*/}
                <div className="col-md-3 col-sm-6">
                    <h4 style={{color:'orange'}}>About us</h4>
                   
                   <p>Easy Market is your one stop store <br/>
                      for your favourite range of goods<br/>
                      We stock a wide variaty of products <br/>
                      ranging from electronic appliences<br/>
                      to the latest in designer fashion for<br/>
                      both men and women.</p>
                </div>

                {/* Second Column 3*/}
                <div className="col-md-3 col-sm-6">
                    <h4 style={{color:'orange'}}>Our Categories</h4>
                    <ul className="list-unstyled">
                        <li>Electronics</li>
                        <li>Jewlry</li>
                        <li>Mens wear</li>
                        <li>Ledies ware</li>
                    </ul>
                </div>

                 {/* Second Column 4*/}
                 <div className="col-md-3 col-sm-6">
                    <h4 style={{color:'orange'}}>Contact us</h4>
                    <ul className="list-unstyled">
                        <li>Tel: 0712 123 123</li>
                        <li>Email: info@esymarket.com</li>
                        <li>Facebook: easymarkert</li>
                        <li>Instagram: Easy Market</li>
                    </ul>
                </div>



            </div>

            {/*Footer Bootom*/}
            <div className="col-md-3 col-sm-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                <p className="text-xs-center pl-6" style={{color: 'orange', fontSize: '12px'}}>
                All Rights Reserved &copy; 2023 EazyMarket 
                </p>
            </div>

        </div>
    </div>
  );
}

export default Footer1;
