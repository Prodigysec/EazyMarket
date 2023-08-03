import React from 'react'
import Logo from '../images/Logo-3.png';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-warning">

  <div className="container-fluid">
    
    <a className="navbar-brand"  href="#">
        <img src={Logo} alt="Logo" style={{width: '80px'}}/>
    </a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <ul className="navbar-nav m-auto mb-2 mb-lg-0"> */}
        
        <li className="nav-item">
          <p><span style={{color:'green', fontSize: '18px'}}><b>Welcome to eazyMarket</b></span>  |  Moringa's number one online market</p>
        </li>
        
        {/* <li className="nav-item">
          <a className="nav-link" href="#">Jewelry</a>
        </li> */}

      
      {/* </ul> */}

      
    </div>
  </div>
</nav>
  )
}

export default Navbar;