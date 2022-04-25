import React from 'react';
import styled from 'styled-components';
function Footer() {
    return <FooterStyled>
      
 <footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <p className='copyright'>Copyright © 2022 ets All Rights Reserved. </p>
          
        </div>
      </div>
    </div>
  </footer>
  </FooterStyled>;
}
const FooterStyled = styled.div`

.copyright{      
    color:${props=>props.theme.textColor}!important;
    font-size:1.2rem;
}
footer {
  background-image: url(${props=>props.theme.footerBack});  
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 130px;
}

footer p {
  text-align: center;
  margin: 20px 0px;
  color:red;
}

footer p a {
  color:red;
  transition: all 0.5s;
}


`;

export default Footer;
