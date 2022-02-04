import React from 'react';
import styled from 'styled-components';
function Footer() {
    return <FooterStyled>
      
 <footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <p className='copyright'>Copyright © 2022 eNovels. All Rights Reserved. </p>
          
        </div>
      </div>
    </div>
  </footer>
  </FooterStyled>;
}
const FooterStyled = styled.div`

.copyright{      
    color:black !important;
    font-size:1.2rem;
}
footer {
  background-image: url('footer.jpg');  
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 130px;
}

footer p {
  text-align: center;
  margin: 20px 0px;
  color: black;
}

footer p a {
  color: black;
  transition: all 0.5s;
}


`;

export default Footer;
