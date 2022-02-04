
import './App.css';
import Nav from './components/Nav';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import GenreView from './components/GenreView';
import NovelDetails from './components/NovelDetails';
import Read from './components/Read';
import Header from './components/Header';
import SearchNovel from './components/SearchNovel';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import '../src/components/Nav.css';
import {Link, NavLink} from 'react-router-dom';
import styled from 'styled-components';
import close from '../src/assets/images/close_big.png';
import open_menu from '../src/assets/images/menu_yellow.png';
import search_img from '../src/assets/images/search.png'
import { CgSun } from 'react-icons/cg';
import {HiMoon} from 'react-icons/hi'
import NavStyled from './components/Nav';
 

const LightTheme = {
  textColor: 'black',
  backgroundColor: 'white',
  navBack: 'rgb(255, 244, 244)',
  logoColor: '#a30474',
}

const DarkTheme = {
  textColor: '#f0ede4',
  backgroundColor: '#121212',
  navBack: 'black',
  logoColor: 'white',
}
const themes = {
  light: LightTheme,
  dark: DarkTheme
}


const Toggle = styled.button`
cursor: pointer;
height: 30px;
width: 30px;

border-radius:50%;

background-color: ${props => props.theme.backgroundColor};
color:${props => props.theme.textColor};
&:focus{
	outline: none;
}
transition: all .5s ease-in-out;

.icon{

	position: relative;
	bottom: 20.5px;
}
.toggle{
	position: relative;
	bottom: 40px;
	color: ${props=>props.theme.logoColor} !important;
	width: 100px;
	margin-left: -2rem;
}


`;


function App() {
  const [theme, setTheme] = useState('dark');
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

  const icon = theme === 'light' ? <HiMoon size={25} /> : <CgSun size={25} />;
  
  return (
    <ThemeProvider theme={themes[theme]}>
    <div className="App">
     
        <NavStyled>
     <div className="wrapper">
            <div className="logo"><a href="/">eNovels</a></div> 
           <div className="header_search">
					<form action="#"  id="header_search_form">
						<input type="text" className="search_input" onChange={(e)=> setSearch(e.target.value)} placeholder="Search Novel" required="required"/>
		 <Link to={`/search/${search}`}> <button className="header_search_button"><img src={search_img} alt=""/></button></Link>
					</form>
					</div>
				
					<Toggle onClick={changeTheme} >							
						<span className='icon'>{icon}</span>	
						<p className='toggle'>{mode}</p>
				</Toggle>

       <input className='radio' type="radio" name="slider" id="menu-btn"/>
            <input className='radio' type="radio" name="slider" id="close-btn" />
       <ul className="nav-links">
        <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times"><img src={close} /></i></label>
              <li><NavLink className='link' to="/" activeclass="active">
                            Home
                        </NavLink></li>      
        <li> <NavLink className='link' to="/genre"  activeclass="active">
                            Genre
              </NavLink></li>
        
                <li> <NavLink className='link' to="/genre"  activeclass="active">
                            Login
              </NavLink></li>      
      </ul>
      <label htmlFor="menu-btn" className="btn menu-btn"><i><img src={open_menu} /></i></label>
      </div>
   
  </NavStyled>
     
    

    <div className="main-content">
         <div className="content">
       <Routes>
         <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
       

            
            
       
         <Route path="/genre" element={<GenreView />} />
            
            <Route path="details/:id" element={<NovelDetails />} />
            <Route path="read/:id/:id2/:pageNum" element={<Read />} />
            <Route path="search/:value" element={<SearchNovel />} />
            

              
          

              
            
              
          
        
        
       </Routes>

        </div>
      
      </div>
      <Footer/>
      
     
   
      </div>
      </ThemeProvider>
  );
}

export default App;