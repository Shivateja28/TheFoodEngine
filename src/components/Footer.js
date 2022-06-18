import { faFacebook, faFacebookF, faFacebookMessenger, faInstagram, faInstagramSquare, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Footerlogo from '../Images/Footerlogo.png'


function Footer(){

    return(
        <div>
            <footer className="footer">
      
      <div className="container">
          <div className="row">
          <div className="col-md-4 pr-md-5">
              <img src = {Footerlogo} className= "w-50 m-0 mx-auto rounded"></img>
          </div>
          <div className="col-md">
              <ul className="list-unstyled nav-links mt-5">
              <li><a href="#" className="text-light">About Us</a></li>
              <li><a href="#" className="text-light">Services</a></li>
              <li><a href="#" className="text-light">Contact</a></li>
              <li><a href="#" className="text-light">FAQs</a></li>
              </ul>
          </div>
          <div className="col-md ">
              <ul className="list-unstyled nav-links mt-5">
                  <li><a href="#" className="text-light">Privacy Policy</a></li>
                  <li><a href="#" className="text-light">Terms &amp; Conditions</a></li>
                  <li><a href="#" className="text-light">Partners</a></li>
              </ul>
          </div>
          <div className="col-md">
              <ul className="list-unstyled nav-links mt-5">
                  <p className="h2 text-light">Follow Us</p>
                  <FontAwesomeIcon icon = {faTwitter} className="h2 p-2"></FontAwesomeIcon>
                  <FontAwesomeIcon icon = {faFacebook} className="h2 p-2"></FontAwesomeIcon>
                  <FontAwesomeIcon icon = {faInstagram} className="h2 p-2"></FontAwesomeIcon>
              </ul>
          </div>
          <div className="col-md text-md-center">
              <ul className="social list-unstyled">
              <li><a href="#"><span className="icon-instagram"></span></a></li>
              <li><a href="#"><span className="icon-twitter"></span></a></li>
              <li><a href="#"><span className="icon-facebook"></span></a></li>
              <li><a href="#"><span className="icon-pinterest"></span></a></li>
              <li><a href="#"><span className="icon-dribbble"></span></a></li>
              </ul>
          </div>
          </div> 

          <div className="row ">
          <div className="col-12 text-center">
              <div className="copyright mt-5 pt-5">
              <p>&copy; All Rights Reserved.</p>
              <p className="h3 text-light">The Food Engine</p>
              </div>
          </div>
          </div> 
      </div>
  
  </footer>
        </div>
    )

}

export default Footer