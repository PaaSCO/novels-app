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

.contain {
  .wsk-cp-product {
  height: 90%;
  background: ${props=>props.theme.cardBack};
  padding: 15px;
  border-radius: 6px;
  box-shadow:${props=>props.theme.cardShadow};
  position: relative;
  margin: 20px auto;


  .wsk-cp-img {
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translate(-50%);
  -webkit-transform: translate(-50%);
  -ms-transform: translate(-50%);
  -moz-transform: translate(-50%);
  -o-transform: translate(-50%);
  -khtml-transform: translate(-50%);
  width: 80%;
  padding: 15px;
  transition: all 0.2s ease-in-out;

  img{
    width: 100%;
  transition: all 0.2s ease-in-out;
  border-radius: 6px;
  }
}


&:hover{
  .wsk-cp-img {
  top: -40px;
}


}



.wsk-cp-text{
position: relative;
top:-45px;


  .title-product{
    h3 {
  font-size: 20px;
  font-weight: bold;
  margin: 15px auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  color: ${props=>props.theme.textColor} !important;
}
  }


  .description-prod{
  h6{
   margin: 0;
  font-size: medium;
  color: ${props => props.theme.textColor} ;
  }
}
}




}

.category>span{
 padding: 12px 30px;
  border: 1px solid #313131;
  background: #212121;
  color: #fff;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 27px;
  transition: all 0.05s ease-in-out;
}
}



`;

export default Novel;
