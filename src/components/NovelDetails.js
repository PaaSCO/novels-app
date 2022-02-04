import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchNovels from './useFetchNovels';
import styled from 'styled-components';
import Details from './Details';
import './Details.css';
import DetailsTab from './DetailsTab';
import Novel from './Novel';
import Title from './Title';


function NovelDetails() {
  
    const { novels } = useFetchNovels('novel');
      const { id,id2 } = useParams();
    


    //get novel with this id
    const details = novels.filter((novel) => novel.id === `${id}`);
    //get all trending novels
  const recommended = novels.filter((novel) => novel.category === 'latest');
   

    return    <DetailsStyled>
        < div className = 'novel-details' >

    
                  
            <Details novels={details} id={`${id}`} id2={`${id2}`}/>

            <br /> <br /> <br />
            <div className='details-tab'>
                 <DetailsTab novels={details} id={`${id}`} />
            </div>
           
            

             
     
        <Title title='RECOMMENDED' span='Novels'/>
           
            <Novel novels={recommended} />


        
        </div>;
    </DetailsStyled>
}

const DetailsStyled = styled.div`

.novel-details{
    position:relative;
    top:10rem;
     background-color: #ffffff;


     .details-tab{
          background-color: #ffffff !important;
     }
}
`;
export default NovelDetails;
