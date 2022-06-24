
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import GenreView from './components/GenreView';
import NovelDetails from './components/NovelDetails';
import SearchIcon from '@mui/icons-material/Search';
import Read from './components/Read';
import SearchNovel from './components/SearchNovel';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import '../src/components/Nav.css';
import {Link, NavLink} from 'react-router-dom';
import styled from 'styled-components';
import close from '../src/assets/images/close_big.png';
import open_menu from '../src/assets/images/menu.png';
import { CgSun } from 'react-icons/cg';
import {HiMoon} from 'react-icons/hi'
import NavStyled from './components/Nav';
import Articles from './components/Articles';
import DisplayArticle from './components/DisplayArticle';
import About from './components/About';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const LightTheme = {
  textColor: 'black',
  backgroundColor: 'white',
  navBack: 'rgb(255, 255, 255)',
  logoColor:'black',
  cardBack: 'white',
  homeBack: '#ffffff',
  articleBack:'white',
  cardShadow: '0 1px 3px rgba(190, 47, 47, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
  footerBack: '#ffffff',
   rankBack:'#e0e2e4',
  categoryBack: '#212121',
  slidderBack: 'linear-gradient(white,#FDEFD, white)',

}

const DarkTheme = {
  textColor: '#f0ede4',
  backgroundColor: '#000000',
  navBack: '#121212',
  logoColor: 'white',
  cardBack: '#000000',
  homeBack: '#121212',
  articleBack:'#121212',
  cardShadow: ' 0 19px 38px rgba(155, 154, 154, 0.3), 0 15px 12px rgba(226, 216, 216, 0.22)',
  footerBack: '#202020',
  rankBack:'',
  categoryBack: '#212121',
  slidderBack: 'linear-gradient(black,#212121 )',
}
const themes = {
  light: LightTheme,
  dark: DarkTheme
}


const Toggle = styled.button`
cursor: pointer;
height: 1px;
width: 1px;
position:relative ;
top:23.4px !important;

border:none;


background-color: ${props => props.theme.backgroundColor};
color:${props => props.theme.textColor};
&:focus{
	outline: none;
}
transition: all .5s ease-in-out;

.icon{

	position: relative;
	bottom: 25px;
 opacity:0.7;

}
.toggle{
	position: relative;
	bottom: 40px;
	color: ${props=>props.theme.logoColor} !important;
	width: 5px;
	margin-left: -3rem !important;
  display:none;

   &:hover{
    display:block ;
  }


}


`;


function App() {
  const [theme, setTheme] = useState('light');
  const [search, setSearch] = useState('');
	const [display, setDisplay] = useState();

	const mode = theme === 'light' ? 'dark mode' : 'light mode';
	const changeTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
			
		} else if (theme === 'dark') {
			setTheme('light')
		}
	}

  const icon = theme === 'light' ? <Brightness4Icon sx={{ fontSize: 21 }} /> : <Brightness7Icon  sx={{ fontSize: 21 }} />;
  const searchLogo = theme === 'light' ? <SearchIcon sx={{ fontSize: 21, color: 'black', opacity: 0.8 }} /> : <SearchIcon sx={{ fontSize: 21, color: 'white', opacity: 0.8 }} />;
  const openMenu = theme === 'light' ? <MenuIcon sx={{ fontSize: 21, color: 'black', opacity: 0.8 }} /> : <MenuIcon sx={{ fontSize: 21, color: 'white', opacity: 0.8 }} />;
  const closeMenu = theme === 'light'  ? <CloseIcon sx={{ fontSize: 21, color: 'black', opacity: 0.8 }} /> : <CloseIcon  sx={{ fontSize: 21, color: 'white', opacity: 0.8 }} />;
  return (
    <ThemeProvider theme={themes[theme]}>
      <AppStyled>
    <div className="App">
     
          <NavStyled>
          
     <div className="wrapper">
            <div className="logo"><a href="/"><span className='scroll'> Eat</span> this <span className='scroll'>Scroll</span></a></div> 
        
				  
				

       <input className='radio' type="radio" name="slider" id="menu-btn"/>
            <input className='radio' type="radio" name="slider" id="close-btn" />
       <ul className="nav-links">
                <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times">{closeMenu}</i></label>
             
        <li> <NavLink className='link' to="/ebooks"  activeclass="active">
                            Ebooks
              </NavLink></li>
        
                <li> <NavLink className='link' to="/articles"  activeclass="active">
                            Articles
                </NavLink></li> 
              
                 <li><NavLink className='link' to="/about" activeclass="active">
                            About
                </NavLink></li>    
                
                
                
              </ul>
              <div className='right_nav'>
                <ul>
                  <Link to={`/search/allresourceseatthescroll`}>   <li> {searchLogo}</li></Link>
                  <li> 
              	<Toggle onClick={changeTheme} >							
						<span className='icon'>{icon}</span>	
                	<p className='toggle' >{mode}</p>
                </Toggle></li>
                </ul>
            
                </div>
              <label htmlFor="menu-btn" className="btn menu-btn"><i>{openMenu}</i></label>
      </div>
   
  </NavStyled>
     
    

    <div className="main-content">
         <div className="content">
       <Routes>
         <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
       

            
            
       
                <Route path="/ebooks" element={<GenreView theme={theme} setTheme={setTheme} />} />    
                <Route path="/articles" element={<Articles theme={theme}/>} />        
                <Route path="details/:id/:genre" element={<NovelDetails theme={theme} />} />
                <Route path="display_articles/:id/:genre" element={<DisplayArticle theme={theme} />} />
            <Route path="read/:id/:id2/:pageNum" element={<Read />} />
            <Route path="search/:value" element={<SearchNovel theme={theme} />} />
            
              <Route path="/about" element={<About theme={theme} setTheme={setTheme} />} />    
              
          

              
            
              
          
        
        
       </Routes>

        </div>
      
          </div>
          <br/><br/>
          <Footer theme={theme} setTheme={setTheme}/>
      
     
   
        </div>
        </AppStyled>
      </ThemeProvider>
  );
}
const AppStyled = styled.div`
background-color :${props => props.theme.backgroundColor};
.closeMenu{
  width:20px;
}

.open_icon{
  width:20px ;
}
.scroll{
  font-family:inherit ;
  font-size:inherit ;
  color:red;
}
`;

export default App;
