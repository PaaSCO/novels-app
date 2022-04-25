import React,{useState,useEffect} from 'react';
import { db } from '../Firebase';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import Genre from './Genre';
import Novel from './Novel';
import './Genre.css';
import useFetchNovels from './useFetchNovels';
import styled from 'styled-components';

function GenreView() {

  const [genres, setGenres] = useState([]);
   const [uniquegenres2, setUniqueGenres2] = useState([]);
  const [gnovels, setGnovels] = useState([]);
  const [gname, setGname] = useState('all');
  

 

  useEffect(() => {
    const genresRef = collection(db, "novel");
    const q = query(genresRef, where('type', '==' ,'ebook'));
    onSnapshot(q, (snapshot) => {      
      const genres = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGenres(genres);   
      setGnovels(genres);

    })   

    const genresRef2 = collection(db, "genres");
    const q2 = query(genresRef2, orderBy('title' , 'asc'));
    onSnapshot(q2, (snapshot) => {      
      const uniquegenres2 = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUniqueGenres2(uniquegenres2);   
      

    })   
    
    

  }, [])

  const displayAll = () => {
    setGnovels(genres);
  }
 function uniq(array, field) {
  return array.reduce((accumulator, current) => {
      if(!accumulator.includes(current[field])) {
        accumulator.push(current[field])
      }
      return accumulator;
    }, []
  )
}

const uniquegenres = uniq(genres, 'genre');
  console.log('display unique');
  console.log(uniquegenres );

  

  const displayGenre = (agenre) => {
    const selectedGenre = genres.filter(genre => genre.genre === agenre);  
    setGnovels(selectedGenre);  
    setGname(agenre);    
  }

 
 
  return  <GenreViewStyled>
  <div className='genreview'>
   
    <h5>Genres</h5>
        
    <Genre genres={uniquegenres2}  displayGenre={displayGenre} displayAll={displayAll} />



    <br /> <br /> <br /> <br />
    
  
     <h5><span>{gnovels.length}</span> result(s) for {gname}</h5>
        
    <Novel novels={gnovels}/>    
  </div>;
   </GenreViewStyled>   
}

const GenreViewStyled = styled.div`

   h5{
   
     text-align:center;
     color:${props=>props.theme.textColor};

     span{
       color:red;
       font-size:1.5rem;
     }
   }

 .genreview{
  margin-left: 5%;
  margin-right: 5%;
}
.genreview{
  background-color: ${props=>props.theme.backgroundColor};
}



`;

export default GenreView;
