import React from 'react'
import Logo from '../images/LogoH.png';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-warning">

  <div className="container-fluid">
    
    <a className="navbar-brand"  href="#">
        <img src={Logo} alt="Logo" style={{width: '150px'}}/>
    </a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Electronics</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="#">Jewelry</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Mens Wear</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Womens Wear</a>
        </li>
      </ul>

      
    </div>
  </div>
</nav>
  )
}

export default Navbar;