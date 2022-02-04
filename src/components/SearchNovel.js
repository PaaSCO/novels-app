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
           
            <h5 className='results'><span>{mySearchNovels.length}</span> result(s) for "{value}"</h5><br/>
            <Novel novels={mySearchNovels} />
        </SearchStyled>
  </div>;
}

const SearchStyled = styled.div`
 .results{
     margin-top:130px;
     text-align:center;

  span{
      color:red;
      font-size:20px;
  }
 }

`;

export default SearchNovel;
