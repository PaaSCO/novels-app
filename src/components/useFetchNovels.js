import { useEffect, useState } from "react";
import { db } from '../Firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

const useFetchNovels = () => {
    const [novels, setNovels] = useState([]);

    useEffect(() => {
    const novelsRef = collection(db, "novel");
    const q = query(novelsRef, orderBy('title' , 'asc'));
    onSnapshot(q, (snapshot) => {      
      const novels = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNovels(novels);   

    })   
    
      
      
  }, [])
  return {novels}
}

export default useFetchNovels;