
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Mens from "../images/Mens.jpg"
import Ladies from "../images/Ladies.jpg"
import Electronics from "../images/Electronics.jpg"
import Jewelry from "../images/Jewelry.jpg"



const Categories = () => {
  return (

    <div class="row row-cols-1 row-cols-md-4 g-4" style={{padding: "30px"}}>

<div class="col">
      <img src={Electronics} class="card-img-top" alt="..."/>
  </div>

  <div class="col">
     <img src={Jewelry} class="card-img-top" alt="..."/>
  </div>

  <div class="col">
      <img src={Mens} class="card-img-top" alt="..."/>
  </div>

  <div class="col">
      <img src={Ladies} class="card-img-top" alt="..."/>
  </div>



</div>

   
  );
}

export default Categories;