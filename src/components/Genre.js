import React from 'react';
import Chip from '@mui/material/Chip';
import BookIcon from '@mui/icons-material/Book';
import './Genre.css';
import styled from 'styled-components';


function Genre({genres, displayGenre, displayAll,theme}) {


  const myColor = theme === 'light' ? 'black' : 'white';

 
  return <div className='genre'>
<GenreStyled>
    <br /> <br /><br /><br /><br /><br />

           <Chip sx={{color:myColor}} icon={<BookIcon sx={{color:'red'}} />} onClick={()=>displayAll()} label='All' variant="outlined" />
                  
     {
          genres.map((genre) =>(
            <span key={genre.id}  className='genre-item' >            
                    <Chip sx={{margin:'12px', color:myColor}} icon={<BookIcon />} onClick={()=>displayGenre(genre.title)} label={genre.title} variant="outlined"  />
                 
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
