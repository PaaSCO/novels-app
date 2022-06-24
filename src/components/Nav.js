import styled from 'styled-components';

 const  NavStyled = styled.nav`
font-family:'Roboto', 'Poppins', sans-serif;
margin-top: 0 !important;

i {
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translate(-50%, -50%);
  font-size: 22px;
  /*color: #afaf69;*/
  color: orangered;
  transition: 0.2s;
}

.wrapper {
  position: relative;
  max-width: 1300px;
  padding: 0px 30px;
  height: 100px;
  line-height: 70px;
  margin: auto;
  display: flex;
  align-items: center;
  background-color: ${props=>props.theme.navBack};
  box-shadow: none;
  justify-content: space-between;
 
  
  .logo{
	  a{
  color:  ${props=>props.theme.logoColor};
 font-family:'Tangerine' ;
  font-size: 2.4rem;
  opacity:0.9 ;
  font-weight: 800;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.47, 0, 0.745, 0.715);  
  &:hover {
      color: #020000;
 font-size: 27px;
  }
	  }
    img{
      width:20%;
      border:1px solid red;
    }
  }

  .nav-links{
	  display: inline-flex;
	  li{
		   list-style: none;
		  a{
			  color: ${props=>props.theme.logoColor};
  text-decoration: none;
  opacity:0.9 ;
  font-size: .96rem;
  font-weight: 600;
  padding: 9px 15px;
  margin-left: 0px !important; 
  font-family: "Raleway";
  letter-spacing: .05rem;
  transition: all 0.3s ease;

  &:hover {
	  color: #d64824;
  }
		  }
	  }

	  .mobile-item{
		    display: none;
	  }
  }
}

.right_nav{
 ul{
   li{
      display: inline;
      margin-left:1.6rem ;
   }
 }
}

  position: fixed;
  z-index: 99;
  width: 100%;
  background: ${props=>props.theme.navBack};
   box-shadow: 0 1px 1px rgba(155, 154, 154, 0.3), 0 15px 12px rgba(226, 216, 216, 0.22);


.header_link{
  color: #dd940c;
  font-size: 20px;
  font-weight: 500;
  
  &:hover{
    background-color:#ffff8f;
  }

}

.header_search
{
	margin-left: 30% !important;

}
.header_search_form
{
	display: block;
}
.search_input
{
	width: 360px;
	height: 39px;
	border: solid 0.5px #4a4a4a;
	border-radius: 20px;
	outline: none;
	text-align: center;
	font-size: 16px;
	color: #2e2e2e;
	font-weight: 300;
	box-shadow: 0 0 1px 0px #4a4a4a inset, 0 0 1px 0px #4a4a4a;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.search_input:focus,
.search_input:hover
{
	border-color: #a30474;
	box-shadow: 0 0 1px 0px #2fce98 inset, 0 0 1px 0px #2fce98;
}
.search_input::-webkit-input-placeholder
{
	font-size: 16px !important;
	font-weight: 300 !important;
	color: #2e2e2e !important;
}
.search_input:-moz-placeholder
{
	font-size: 16px !important;
	font-weight: 300 !important;
	color: #2e2e2e !important;
}
.search_input::-moz-placeholder
{
	font-size: 16px !important;
	font-weight: 300 !important;
	color: #2e2e2e !important;
} 
.search_input:-ms-input-placeholder
{ 
	font-size: 16px !important;
	font-weight: 300 !important;
	color: #2e2e2e !important;
}
.search_input::input-placeholder
{
	font-size: 16px !important;
	font-weight: 300 !important;
	color: #2e2e2e !important;
}
.header_search_button
{
	position: relative;
	top: 22px;
	left:13%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	right: 0;
	width: 24px;
	height: 39px;
	border: none;
	outline: none;
	background: transparent;
	cursor: pointer;
}
@media screen and (max-width: 970px) {
.wrapper{

  .logo{
    font-size:2.2rem ;
    opacity: 0.9;
  }
	.nav-links{
    position: fixed;
    height: 100vh;
    width: 100%;
    max-width: 350px;
    top: 0;
    left: -100%;
    background: ${props=>props.theme.backgroundColor};
    display: block;
    padding: 50px 10px;
    line-height: 50px;
    overflow-y: auto;
    box-shadow: 0px 15px 15px rgba(163, 116, 116, 0.18);
    transition: all 0.3s ease;
	}
}

}






`;
export default NavStyled;
