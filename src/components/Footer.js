import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/eat40.jpg';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
function Footer() {
    return <FooterStyled>
      
 <footer id="dk-footer" className="dk-footer">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-4">
                   <div className="dk-footer-box-info">
                        <a href="index.html" className="footer-logo">
                            <img src={logo} alt="footer_logo" className="img-fluid"/>
                        </a>
                        <p className="footer-info-text">
                        
        Our mission and mandate as a group is to provide useful resources for people who are hungry and thirsty for the pure unadulterated word of God.
                        </p>
                        <div className="footer-social-link">
                            <h3>Social Media </h3>
                            <ul>
                                <li>
                      <a href="#" >
                        <i className='facebook'>
                                        <FacebookIcon/></i>
                                    </a>
                                </li>
                                <li>
                      <a href="#">
                        <i className='twitter'>
                                       <TwitterIcon/></i>
                                    </a>
                    </li>
                     <li>
                      <a href="#">
                        <i className='whatsapp'>
                                       <WhatsAppIcon/></i>
                                    </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className='telegram'>
                                       <TelegramIcon/></i>
                                    </a>
                                </li>
                                 <li>
                      <a href="#">
                        <i className='youtube'>
                                       <YouTubeIcon/></i>
                                    </a>
                                </li>
                               
                                
                            </ul>
                        </div>
                      
                    </div>
                 
                    <div className="footer-awarad">
                        <img src="images/icon/best.png" alt=""/>
                        <p>Home for the Hungry and the Thirsty</p>
                    </div>
           </div>
             
                <div className="col-md-12 col-lg-8">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact-us">
                                <div className="contact-icon">
                                <LocationOnIcon />
                                </div>
                            
                                <div className="contact-info">
                                    <h3>Kumasi,Ghana</h3>
                                    <p>Growth 360</p>
                                </div>
                              
                            </div>
                         
                        </div>
                      
                        <div className="col-md-6">
                            <div className="contact-us contact-us-last">
                                <div className="contact-icon">
                                   <PhoneIcon color='red'/>
                                </div>
                            
                                <div className="contact-info">
                                    <h3>+233506559449</h3>
                                    <p>Give us a call</p>
                                </div>
                            
                            </div>
                           
                        </div>
                      
                    </div>
 
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <div className="footer-widget footer-left-widget">
                                <div className="section-heading">
                                    <h3>Useful Links</h3>
                                    <span className="animate-border border-black"></span>
                                </div>
                                <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                       <Link to="/ebooks">Ebooks</Link>
                      </li>
                       </ul>
                      <ul>
                                    <li>
                                       <Link to="/articles">Articles</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About Us</Link>
                                    </li>
                               </ul>
                               
                            </div>
                          
                        </div>
                      
                        <div className="col-md-12 col-lg-6">
                            <div className="footer-widget">
                                <div className="section-heading">
                                    <h3>Subscribe</h3>
                                    <span className="animate-border border-black"></span>
                                </div>
                                <p>
                               Subscribe for new resources.</p>
                                <form action="#">
                                    <div className="form-row">
                                        <div className="col dk-footer-form">
                                            <input type="email" className="form-control" placeholder="Email Address"/>
                                            <button type="submit">
                                              <SendIcon/>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                              
                            </div>
                        
                        </div>
                   
                    </div>
                 
                </div>
              
            </div>
           
        </div>
        


        <div className="copyright">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <span>Copyright © 2022, All Right Reserved Eat this Scroll</span>
                    </div>
               
                    <div className="col-md-6">
                        <div className="copyright-menu">
                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Terms</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
               
                </div>
             
            </div>
           
        </div>
    
     
</footer>

  </FooterStyled>;
}
const FooterStyled = styled.div`
 
.footer-widget p {
    margin-bottom: 27px;
}
p {
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    line-height: 28px;
}

   .animate-border {
  position: relative;
  display: block;
  width: 115px;
  height: 3px;
  background: red; }

.animate-border:after {
  position: absolute;
  content: "";
  width: 35px;
  height: 3px;
  left: 0;
  bottom: 0;
  border-left: 10px solid #fff;
  border-right: 10px solid #fff;
  -webkit-animation: animborder 2s linear infinite;
  animation: animborder 2s linear infinite; }

@-webkit-keyframes animborder {
  0% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px); }
  100% {
    -webkit-transform: translateX(113px);
    transform: translateX(113px); } }

@keyframes animborder {
  0% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px); }
  100% {
    -webkit-transform: translateX(113px);
    transform: translateX(113px); } }

.animate-border.border-white:after {
  border-color: #fff; }

.animate-border.border-yellow:after {
  border-color: #F5B02E; }

.animate-border.border-orange:after {
  border-right-color: #007bff;
  border-left-color: #007bff; }

.animate-border.border-ash:after {
  border-right-color: #EEF0EF;
  border-left-color: #EEF0EF; }

.animate-border.border-offwhite:after {
  border-right-color: #F7F9F8;
  border-left-color: #F7F9F8; }

/* Animated heading border */
@keyframes primary-short {
  0% {
    width: 15%; }
  50% {
    width: 90%; }
  100% {
    width: 10%; } }

@keyframes primary-long {
  0% {
    width: 80%; }
  50% {
    width: 0%; }
  100% {
    width: 80%; } } 

.dk-footer {
  padding: 75px 0 0;
  background-color: #151414;
  position: relative;
  z-index: 2; }
  .dk-footer .contact-us {
    margin-top: 0;
    margin-bottom: 30px;
    padding-left: 80px; }
    .dk-footer .contact-us .contact-info {
      margin-left: 50px; }
    .dk-footer .contact-us.contact-us-last {
      margin-left: -80px; }
  .dk-footer .contact-icon i {
    font-size: 24px;
    top: -15px;
    position: relative;
    color:#007bff; }

.dk-footer-box-info{
  position: absolute;
  top: -32px;
  background: #202020;
  max-width:30% ;
  padding: 40px;
  z-index: 2; }
  .dk-footer-box-info .footer-social-link h3 {
    color: #fff;
    font-size: 24px;
    margin-bottom: 25px; }
  .dk-footer-box-info .footer-social-link ul {
    list-style-type: none;
    padding: 0;
    margin: 0; }
  .dk-footer-box-info .footer-social-link li {
    display: inline-block; }
  .dk-footer-box-info .footer-social-link a i {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
    background: #000;
    margin-right: 5px;
    color: #fff; }
    .dk-footer-box-info .footer-social-link a .facebook {
      background-color: #3B5998; }
    .dk-footer-box-info .footer-social-link a .twitter {
      background-color: #55ACEE; }
    .dk-footer-box-info .footer-social-link a  .whatsapp{
      background-color: #25D366; }
    .dk-footer-box-info .footer-social-link a .telegram {
      background-color: #0088cc }
    .dk-footer-box-info .footer-social-link a .youtube {
      background-color: #ff0000; }

.footer-awarad {
  margin-top: 285px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 100%;
  -moz-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center; }
  .footer-awarad p {
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    margin-left: 16px;
    padding-top: 15px; }

.footer-info-text {
  margin: 26px 0 32px; }

.footer-left-widget {
  padding-left: 80px; }

.footer-widget .section-heading {
  margin-bottom: 35px; }

.footer-widget h3 {
  font-size: 24px;
  color: #fff;
  position: relative;
  margin-bottom: 15px;
  max-width: -webkit-fit-content;
  max-width: -moz-fit-content;
  max-width: fit-content; }

.footer-widget ul {
  width: 50%;
  float: left;
  list-style: none;
  margin: 0;
  padding: 0; }

.footer-widget li {
  margin-bottom: 18px; }

.footer-widget p {
  margin-bottom: 27px; }

.footer-widget a {
  color: #878787;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s; }
  .footer-widget a:hover {
    color: #007bff; }

.footer-widget:after {
  content: "";
  display: block;
  clear: both; }

.dk-footer-form {
  position: relative; }
  .dk-footer-form input[type=email] {
    color:white !important;
    padding: 14px 28px;
    border-radius: 50px;
    background: #2E2E2E;
    border: 1px solid #2E2E2E; }
  .dk-footer-form input::-webkit-input-placeholder, .dk-footer-form input::-moz-placeholder, .dk-footer-form input:-ms-input-placeholder, .dk-footer-form input::-ms-input-placeholder, .dk-footer-form input::-webkit-input-placeholder {
    color: red;
    font-size: 14px; }
  .dk-footer-form input::-webkit-input-placeholder, .dk-footer-form input::-moz-placeholder, .dk-footer-form input:-ms-input-placeholder, .dk-footer-form input::-ms-input-placeholder, .dk-footer-form input::placeholder {
    color: red;
    font-size: 14px; }
  .dk-footer-form button[type=submit] {
    position: absolute;
    top: 0;
    right: 0;
    padding: 12px 24px 12px 17px;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    border: 1px solid #007bff;
    background: #007bff;
    color: #fff; }
  .dk-footer-form button:hover {
    cursor: pointer; }

/* ==========================

    Contact

=============================*/
.contact-us {
  position: relative;
  z-index: 2;
  margin-top: 65px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center; }

.contact-icon {
  position: absolute; }
  .contact-icon i {
    font-size: 36px;
    top: -5px;
    position: relative;
    color: #007bff; }

.contact-info {
  margin-left: 75px;
  color: #fff; }
  .contact-info h3 {
    font-size: 20px;
    color: #fff;
    margin-bottom: 0; }

.copyright {
  padding: 28px 0;
  margin-top: 55px;
  background: ${props => props.theme.footerBack}; }
  .copyright span,
  .copyright a {
    color: ${props => props.theme.textColor};;
    -webkit-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear; }
  .copyright a:hover {
    color:red; }

.copyright-menu ul {
  text-align: right;
  margin: 0; }

.copyright-menu li {
  display: inline-block;
  padding-left: 20px; }

.back-to-top {
  position: relative;
  z-index: 2; }
  .back-to-top .btn-dark {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    padding: 0;
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #2e2e2e;
    border-color: #2e2e2e;
    display: none;
    z-index: 999;
    -webkit-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear; }
    .back-to-top .btn-dark:hover {
      cursor: pointer;
      background: #FA6742;
      border-color: #FA6742; }

         @media screen and (max-width: 900px) {
      
      .dk-footer-box-info {
      max-width:90% ;
      
    }
}
`;

export default Footer;
