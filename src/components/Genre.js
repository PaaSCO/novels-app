import React from 'react';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import './Genre.css';
import styled from 'styled-components';


function Genre({genres, displayGenre, displayAll}) {



  console.log('Genres');
  console.log(genres);

   console.log('Normal Genres');
  console.log(genres);
  

 
  return <div className='genre'>
<GenreStyled>
    <br /> <br /><br /><br /><br /><br />

           <Chip icon={<FaceIcon />} onClick={()=>displayAll()} label='All' variant="outlined" color='secondary' />
                  
     {
          genres.map((genre) =>(
            <span key={genre.id}  className='genre-item' >            
                    <Chip sx={{margin:'12px'}} icon={<FaceIcon />} onClick={()=>displayGenre(genre.title)} label={genre.title} variant="outlined" color='secondary' />
                 
            </span>
          ))
        }

    
      
    
    
   
    
    </GenreStyled>
    
  </div>;
}
const GenreStyled = styled.div`
.genre{

 

.genre-margin{
  margin: 20px;
}
}
.genre-item{
  margin:1rem;
  padding-top:2rem;
  span{
 
  }
  .space{
    visibility: hidden;
}
}






`;

export default Genre;
