import React from 'react';
import Rating from '@mui/material/Rating';
import styled from 'styled-components';
//import './Details.css';
import { Link } from 'react-router-dom';
 import { useEffect, useState } from "react";
import { db } from '../Firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

function Details({ novels, id, id2 }) {


  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    const chaptersRef = collection(db, "novel", `${id}`, "chapters");
    const q = query(chaptersRef, orderBy('title', 'asc'));
    onSnapshot(q, (snapshot) => {
      const chapters = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setChapters(chapters);

    })
    
      
      
  }, [id])

  return <div className='novel'>
    <NovelStyled >
 
  <div className="container" >
 
        {
           novels.map((novel) => (     
  <div className="row">
             <div className="col" key={novel.id}>
                 <div class="image">
                     <div class="img">
                         <img src={novel.image} alt="Product" class="img-responsive" />
                     </div>    <br/>             
         
               </div>    
         
               </div>
               
                 <div className='col details'>
                 
                         <div class="title-product t-details">
                             <h4> {novel.title}</h4>
                         </div>
                   
                 
<table>  
  <tr>  
    <td>Author</td>
                    <td>{novel.author}</td>
                   
  </tr>
  <tr>  
                     <td>Genre</td>
                     <td>{novel.genre}</td>
                     
                   </tr>
                   <tr>
                     <td>Rating</td>
                     <td>{novel.rating}</td>
                   </tr>
</table>
                 

                                                       
                                    
                           <div className="category">
                                 <Link to={`/read/${id}/${id2}/1`}>  
                         <span className='span'>Start</span>
                         </Link>
                         </div>                            
                         
                     

                   </div>
                   
               </div>
          ))
        }
 
          </div>     
          
     
</NovelStyled>
  </div>   
  
 
  
}
const NovelStyled = styled.div`
background-color:${props => props.theme.homeBack};
margin-bottom:10rem ;


.image {
  background: ${props=>props.theme.homeBack};
  padding: 15px;
  border-radius: 6px;
  box-shadow:none!important;
  position: relative;
  margin: 10px auto;
  img{
    width:80% ;
  }
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-top:3rem ;
  color: ${props => props.theme.textColor};
 margin-left: auto;
  margin-right: auto;
}

td, th {
  border: 0px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: inherit;
}


.category{
    margin: auto;
  width: 50%;
  padding-top: 3rem;
 
}

 @media screen and (max-width: 995px) {
  .image{
    
    display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  }

  

 }



`;

export default Details;
