import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Novel from './Novel';
import { db } from '../Firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import styled from 'styled-components';
function SearchNovel() {
    const { value } = useParams();

  const [novels, setNovels] = useState([]);

    useEffect(() => {
    const novelsRef = collection(db, "novel");
    const q = query(novelsRef, orderBy('title' , 'desc'));
    onSnapshot(q, (snapshot) => {      
      const novels = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNovels(novels);   

    })   
    
      
      
    }, [value])   
    
    const newValue = value.toLocaleLowerCase();
  
    const mySearchNovels = novels.filter(novel => novel.title.toLocaleLowerCase().includes(newValue));
   

  
    
    return <div className='search'>
        <SearchStyled>
             <h5><span>{mySearchNovels.length}</span> result(s) for "{value}"</h5>
           
        <div className='results-item'>
         
          <Novel novels={mySearchNovels} />
          </div>
        </SearchStyled>
  </div>;
}

const SearchStyled = styled.div`

   
   h5{
     position: relative;
     top: 8.3rem;
     text-align:center;
     color:${props=>props.theme.textColor};

     span{
       color:red;
       font-size:1.5rem;
     }
   }

 
 

 .results-item{
 margin-top:150px;

 
 }

`;

export default SearchNovel;
