import React, {useEffect,useState} from 'react';
import { useParams } from 'react-router';
import { db } from '../Firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import ReadScreen from './ReadScreen';
import useFetchNovels from './useFetchNovels';
import './Read.css';

function Read() {
    const { id,id2,pageNum } = useParams();
  const [chapters, setChapters] = useState([]);
  const { novels } = useFetchNovels();


  useEffect(() => {
    const chaptersRef = collection(db, "novel", `${id}`, "chapters");
    const q = query(chaptersRef, orderBy('number' , 'asc'));
    onSnapshot(q, (snapshot) => {      
      const chapters = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setChapters(chapters);   

    })   
    
      
    
      
  }, [])
    
    //get novel with this id
  const readings = chapters.filter((reading) => reading.id === `${id2}`);

 
 
 
 
 
 
    return <div className='read'>
        <br /><br /><br /><br />
        
      <ReadScreen readings={readings} allChapters={chapters} pageNum={`${pageNum}`}/>
        
    
  </div>;
}

export default Read;
