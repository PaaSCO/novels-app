import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchNovels from './useFetchNovels';
import styled from 'styled-components';
import Details from './Details';
import './Details.css';
import DetailsTab from './DetailsTab';
import Novel from './Novel';
import Title from './Title';
import { useState } from 'react';


function NovelDetails({theme}) {
  
    const { novels } = useFetchNovels('novel');
    const { id, id2,genre } = useParams();
      const [novelTitle, setNovelTitle] = useState([]);
   
    

    


    //get novel with this id
    const details = novels.filter((novel) => novel.id === `${id}`);

   
    //get all trending novels
 const recommendedBooks = novels.filter((novel) => novel.type == 'ebook' );
  const recommended = recommendedBooks.filter((novel) => novel.genre === `${genre}` && novel.id != `${id}`).slice(0,3);
   

    return    <DetailsStyled>
        < div className = 'novel-details' >

    
                  
            <Details novels={details} id={`${id}`} id2={`${id2}`} theme={theme}/>

            <br /> <br /> <br />
            <div className='details-tab'>
                <DetailsTab novels={details} id={`${id}`} theme={theme}/>
            </div>
           
            

             
     
        <Title title='Recommended Books' span='BOOKS'/>
           
            <Novel novels={recommended} />


        
        </div>;
    </DetailsStyled>
}

const DetailsStyled = styled.div`

.novel-details{
    position:relative;
    top:10rem;
     background-color: ${props=>props.theme.homeBack};


     .details-tab{
          background-color: #ffffff !important;
     }
}


`;
export default NovelDetails;
