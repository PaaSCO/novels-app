import React from 'react';
import Rating from '@mui/material/Rating';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './Home.css';

function Novel(props) {
  const novels = props.novels;
  return <div className='novel'>
    <NovelStyled >
 
  <div className="container contain" >
  <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4">
        {
         novels.map((novel) =>(
           <div className="col" key={novel.id}>           
             <Link to={`/details/${novel.id}`}>  
               
            <div class="wsk-cp-product">
          <div class="wsk-cp-img">
            <img src={novel.image} alt="Product" class="img-responsive" />
          </div>
          <div class="wsk-cp-text">
            <div class="category">
              <span>Read</span>
            </div>
            <div class="title-product">
            <h3>{ novel.title}</h3>
                   </div>
                   
            <div class="title-product">
            <span><Rating name="read-only" value={novel.rating} readOnly /></span> <span>{novel.rating}</span> 
            </div>
            <div class="description-prod">
                     <h6>{novel.genre}</h6>
                   </div>
                    <div class="description-prod">
                     <h6>{novel.totalchapters} chapter(s)</h6>
                   </div>
                   {/*
            <div class="card-footer">
              <div class="wcf-left"><span class="price">{novel.genre}</span></div>
              <div class="wcf-right"><a href="#" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
                   </div>*/}
          </div>
         
          </div>              
                   
           
         </Link>
           </div>
          ))
        }
  </div>
</div>       
</NovelStyled>
  </div>   
  
 
  
}
const NovelStyled = styled.div`

h4,h5,h6{
  cursor:pointer;
}



`;

export default Novel;
