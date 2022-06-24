import { useEffect, useState } from "react";
import { db } from '../Firebase';
import { doc, updateDoc } from "firebase/firestore";

const useUpdate = () => {
    const [novels, setNovels] = useState([]);

    useEffect(() => {
        const novelsRef = collection(db, "novel");
        const viewsRef = doc(db, "novel", "views");
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