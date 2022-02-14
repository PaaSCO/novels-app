import React from 'react';
import styled from 'styled-components';
import './Home.css'
import Novel from './Novel';
import Release from './Release';
import Title from './Title';
import useFetchNovels from './useFetchNovels';
import 'bootstrap/dist/css/bootstrap.css';
import Rating from '@mui/material/Rating';
import { Carousel, Col, Container, Row, Button } from 'react-bootstrap';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Link } from 'react-router-dom';


function Home({theme}) { 
   // Retrieving all Novels
  const { novels } = useFetchNovels();
   const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };  

//get all trending novels
	const tabsColor = theme === 'light' ? 'secondary' : 'white';
  const trending = novels.filter((novel) => novel.category === 'trending');
  const top_rating = novels.sort((a, b) => a['rating'] - b['rating']).slice(0,4);
  // get all latest novels
    const latest = novels.filter((novel) => novel.category === 'latest');
  
 
  return   <HomeStyled>
      <div className="home">
    <h2>
      Trending Novels 
    </h2>
      <hr /><br /><br /><br /><br />   
      
     
     <Carousel className="carousel" variant="dark">
    
    
        {
          trending.map((trend) => (
       
               <Carousel.Item className='myItem' >
             <Link to={`/details/${trend.id}`}>       
    <img
       className="mycarousel"
      src={trend.image}
      alt={trend.title}
    />

              <Carousel.Caption className="myitems">
                
                 <span><Rating name="read-only" value={trend.rating} readOnly /></span> <span>{trend.rating}</span>
                  <h4 className='title'>{trend.title }</h4>
                <h6 className='desc'>{trend.description} </h6>
                      <br/><br/><br/>
                      <div className="category">
                      <span>Read</span>
                     </div>
     
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
        
          ))
        }  
</Carousel>

    
      
          <Box sx={{ width: '100%', typography: 'body1' }}>
                <Title title='SUGGESTION' span='novels' /><br/>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" onChange={handleChange}
  textColor= 'secondary'
  indicatorColor='secondary'
  aria-label="secondary tabs example"
>
           
              <Tab label="Trending" value="1" sx={{color:tabsColor}}/>
            <Tab label="Top rating" value="2" sx={{color:tabsColor}} />
            <Tab label="Popular" value="3" sx={{color:tabsColor}} />
          </TabList>
        </Box>
          <TabPanel value="1">
             
  
         <Novel novels={trending} />
        </TabPanel>
          <TabPanel value="2">
             <Novel novels={top_rating} />
        </TabPanel>
          <TabPanel value="3">
             <Novel novels={latest} />
        </TabPanel>
      </TabContext>
    </Box>
          
       
      

      <br /><br />
      
    
     <Title title='latest' span='novels' />
    
    <Novel novels={latest} />

      <br /><br />
   
    <div className='release'>
<br /><br />
        <Title title='Latest' span='Release' />
        <br/><br/>
       <Release  />
    </div>
   


     <br /><br />
    
    <Title title='Action' span='novels' />
    <br/>
    <Novel novels={latest} />

</div>
  </HomeStyled>


}
const HomeStyled = styled.div`

.home {
  margin-left: 5%;
  margin-right: 2%;
  border-radius: 20px;
  background-color: ${props=> props.theme.homeBack};



  .carousel{
   margin:3rem;
   margin-top:0rem;
     background:${props=>props.theme.slidderBack} ;

   .myItem{
     img{
       max-height:30rem;      

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
