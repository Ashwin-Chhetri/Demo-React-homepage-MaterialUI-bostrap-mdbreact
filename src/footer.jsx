import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

const FooterPage = () => {
  return (
    <MDBFooter  className="font-small pt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">World Wide Fund</h5>
            <p>
              Helping and protection of the wild life is our motto.
            </p>
          </MDBCol>
          <MDBCol md="6" className="text-center">
            <h5 className="title pl-3">Contact us</h5>
            
              <li className="list-unstyled">
              <SocialIcon url="https://www.facebook.com/" bgColor='rgb(132,64,73)' fgColor="#ffffff" />
                <a href="#https://www.facebook.com/">facebook</a>

              </li>
              <li className="list-unstyled">
              <SocialIcon url="https://www.instagram.com/" bgColor='rgb(132,64,73)' fgColor="#ffffff" />
                <a href="#https://www.facebook.com/">Instagram</a>
              </li>
              <li className="list-unstyled">
              <SocialIcon url="https://web.whatsapp.com/" bgColor='rgb(132,64,73)' fgColor="#ffffff" />
                <a href="#https://www.facebook.com/">Watsapp</a>
              </li>
              
        
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: AshwinChhetri React Demo
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;