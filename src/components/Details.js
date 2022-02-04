import React from 'react';
import Rating from '@mui/material/Rating';
import styled from 'styled-components';
import './Details.css';
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
        <div className="row row-cols-2 row-cols-md-2 row-cols-xl-3">
             <div className="col" key={novel.id}>
                 <div class="wsk-cp-product">
                     <div class="wsk-cp-img">
                         <img src={novel.image} alt="Product" class="img-responsive" />
                     </div>
                 
         
               </div>              
                   
           
         
               </div>
               
                   <div className='col'>
                 <div className='wrapper'>
                         <div class="title-product t-details">
                             <h3> {novel.title}</h3>
                   </div>
                   
                   <div className="row row-cols-1 row-cols-md-2 row-cols-xl-2 below-title">
                     <div className='col left'>
                     <div className='author'>
                               <h6>author:</h6>
                           </div>
                           <div className='rating'>                            
                           <span >rating:</span>
                           </div>
                            <div className="genre">
                             <h6>genre:</h6>
                           </div>
                            <div className="category">
                               <h6>category:</h6>
                         </div>
                           
                            <div className="chapters">
                           <h6>total chapters:</h6>
                           </div>

                     </div>
                     <div className='col right'>
                           <div className='author'>
                               <h6>{novel.author }</h6>
                           </div>
                           <div className='rating'>
                            <Rating name="read-only" value={novel.rating} readOnly size="large" />
                           <span >{novel.rating}</span>
                           </div>
                            <div className="genre">
                             <h6>{novel.genre}</h6>
                           </div>
                            <div className="category">
                               <h6>{novel.category}</h6>
                         </div>
                           
                            <div className="chapters">
                           <h6>{novel.totalchapters} chapter(s)</h6>
                           </div>
                           

                         
                      </div>
                   </div>

                      <div className="card-footer">                                   
                                    
                           <div className="category">
                                 <Link to={`/read/${id}/${id2}/1`}>  
                         <span className='span'>Start</span>
                         </Link>
                         </div>  
                           
                           </div>
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
background-color:#ffff;

.wsk-cp-product {
  background: #fff;
  padding: 15px;
  border-radius: 6px;
  box-shadow:none!important;
  position: relative;
  margin: 20px auto;
}



h4,h5,h6{
  cursor:pointer;
}
.below-title{
  position:relative;
  top:2rem;
}
.right{
.author{
   position:relative;  
    top:.95rem;
    h6{
      font-size:1.1rem !important;
    }
}
.rating{
    position:relative;
   
    top:2.6rem;
}
.genre{
     position:relative;  
    top:3.8rem;
    left:-8px;
    h6{
        font-size:1.1rem !important;
    }
}
.category{
    position:relative;   
    top:5.28rem;
    h6{
        font-size:1.1rem !important;
    }
}
.chapters{
    position:relative;  
    top:6.7rem;
    h6{
        font-size:1.1rem !important;
    }
}
}
.card-footer .category{
    position:relative;  
    top:6rem;
   
  padding: 12px 30px;
  border: 1px solid #313131;
  background: #212121;
  color: #fff;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 27px;
  transition: all 0.05s ease-in-out;
}
.card-footer{
    position:relative;
    top:3rem;
}

.left{
  
   div{
     margin-top:.5rem;
     h6,span{
      font-family:'Caveat'!important; 
      font-size:1.8rem !important;
      letter-spacing:.5px !important;
     }
   }
}


`;

export default Details;
