import React from 'react';
import styled from 'styled-components';
import './Home.css'
import Novel from './Novel';
import Title from './Title';
import useFetchNovels from './useFetchNovels';
import 'bootstrap/dist/css/bootstrap.css';
import Rating from '@mui/material/Rating';
import { Carousel } from 'react-bootstrap';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Link } from 'react-router-dom';
import Article from './Article';
import DownloadIcon from '@mui/icons-material/Download';
import Button1 from '@mui/material/Button';


function Home({theme}) { 
   // Retrieving all Novels
  const { novels } = useFetchNovels();
   const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };  

//get all trending novels
	const tabsColor = theme === 'light' ? 'secondary' : 'white';
  const trending = novels.filter((novel) => novel.category === 'mostread').slice(0,3);
//popular
   const popular = novels.filter((novel) => novel.category === 'popular').slice(0,3);
  //top rating
   const top_ebooks = novels.filter((novel) => novel.type === 'ebook');
  const top_rating = top_ebooks.sort((a, b) => b['rating'] - a['rating']).slice(0,3);
  // get all latest novels
  const articles = novels.filter((novel) => novel.type === 'article');
   const latest_articles = articles.sort((a, b) => b['latest'] - a['latest']).slice(0,3);
   //top bio
    const top_biographies = novels.filter((novel) => novel.top_bio === 'yes').slice(0,3);
  
 
  return   <HomeStyled>
      <div className="home">
    <h2>
      Trending Novels 
    </h2>
      <hr /><br /><br /><br /><br />   
      
     
     <Carousel className="carousel" variant="dark" nextLabel='' prevLabel=''>
    
    
        {
          trending.map((trend) => (
       
               <Carousel.Item className='myItem' >
             <Link to={`/details/${trend.id}/${trend.genre}`}>       
    <img
       className="mycarousel"
      src={trend.image}
      alt={trend.title}
    />

              <Carousel.Caption className="myitems">
                <br/>
                 <span><Rating name="read-only" value={trend.rating} readOnly /></span> <span>{trend.rating}</span>
                  <h4 className='title'>{trend.title }</h4><br/>
                <h6 className='desc'>{trend.description} </h6>
                      <br/><br/><br/>
                       <div className='download'>
              <a href={trend.link} download>
                  <Button1 variant="outlined" color='error' startIcon={<DownloadIcon />}>
        Download
      </Button1>
               </a>
               </div>
     
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
        
          ))
        }  
</Carousel>

    
      
          <Box sx={{ width: '100%', typography: 'body1' }}>
                <Title title='Top Books' span='Books' /><br/>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" 
  textColor= 'secondary'
  indicatorColor='secondary'>
           
              <Tab label="Trending" value="1" sx={{color:tabsColor}}/>
            <Tab label="Top rating" value="2" sx={{color:tabsColor}} />
            <Tab label="Popular" value="3" sx={{color:tabsColor}} />
          </TabList>
        </Box>
          <TabPanel value="1">
             
            {/**   SECTIONS OF THE TAB FOR BOOKS */}
            
         <Novel novels={trending} />
        </TabPanel>
          <TabPanel value="2">
             <Novel novels={top_rating} />
        </TabPanel>
          <TabPanel value="3">
             <Novel novels={popular} />
        </TabPanel>
      </TabContext>
    </Box>
          
       
      

      <br /><br />
      
    
     <Title title='Latest Articles' span='Articles' />
    
        
       <div className="container" >
        <div className="row row-cols-1 row-cols-md-3 row-cols-xl-3">
          {
            latest_articles.map((novel) => (
               <Article article={novel}/>

            ))}
        
          </div>
 </div>
      

      <br /><br />
   
  
   


     <br /><br />
    
    <Title title='Top Biographies' span='Biographies' />
    <br/>
   <div className="container" >
        <div className="row row-cols-1 row-cols-md-3 row-cols-xl-3">
          {
            top_biographies.map((novel) => (
               <Article article={novel}/>

            ))}
        
          </div>
 </div>
      
</div>
  </HomeStyled>


}
const HomeStyled = styled.div`

.home {
  margin-left: 5%;
  margin-right: 2%;
  border-radius: 20px;
  background-color: ${props=> props.theme.homeBack};

.carousel-control-prev-icon,
.carousel-control-next-icon {
  height: 80px;
  width: 80px;
  outline: black;
  background-size: 80%, 80%;
  border-radius: 50%;
  border: 1px solid black;
  background-image: none;
}

.carousel-control-next-icon:after
{
  content: '>';
  font-size: 55px;
  color: red;
}

.carousel-control-prev-icon:after {
  content: '<';
  font-size: 55px;
  color: red;
}

  .carousel{
   margin:3rem;
   margin-top:0rem;
     background:${props=>props.theme.slidderBack} ;

   .myItem{
     img{
       max-height:25rem;   
       align-items   :center ;
       width:fit-content ;

     }
   }

   .myitems{
     max-width:700px;
     max-height:inherit;
     
     position: absolute;
     left:30rem;
     top:0rem;
     h4{
       color:${props => props.theme.textColor}
    
     }

     .desc{
       color:${props => props.theme.textColor};
       font-weight:400;      
     }
   }
  }

 @media screen and (max-width: 800px) {
.carousel{

  .myItem{

  }
  .myitems{
    display:none;
  }
  .desc{
    display:block;
  }
&:hover{
  .myitems{
    max-width:600px;
    max-height:400px;
    position: absolute;
    left:2rem;  
    top:2rem;
    display:block;
   background-color:${props=>props.theme.homeBack};
   opacity:0.8;
   border-radius:5%;


  }
}


}

}

@media screen and (max-width: 1200px) {
.category{
  display:none;
}


}
@media screen and (max-width:930px) {
  .desc{
    display:none;
  }
}


.category{
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  padding: 5px;
  margin-bottom: 45px;
  position: relative;
  transition: all 0.2s ease-in-out;

}
.category > * {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -khtml-transform: translate(-50%, -50%);
}
.category > span {
  padding: 12px 30px;
  border: 1px solid #313131;
  background: #212121;
  color: #fff;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 27px;
  transition: all 0.05s ease-in-out;
}
}

.release{
  background-color: ${props=> props.theme.backgroundColor};
  color:${props=>props.theme.textColor} !important;

}



`;

export default Home;
