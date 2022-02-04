import React from 'react';
import styled from 'styled-components';
import './Home.css'
import Novel from './Novel';
import Release from './Release';
import Title from './Title';
import useFetchNovels from './useFetchNovels';



function Home() { 
   // Retrieving all Novels
  const { novels } = useFetchNovels();


  

  
//get all trending novels
  const trending = novels.filter((novel) => novel.category === 'trending');
  // get all latest novels
    const latest = novels.filter((novel) => novel.category === 'latest');
  
 
  return   <HomeStyled>
      <div className="home">
    <h2>
      Trending Novels 
    </h2>
    <hr/><br/><br/><br/><br/>

     
         
        
          
         <Title title='trending' span='novels' /><br/>
  
         <Novel novels={trending} />
      

      <br /><br />
      
    
     <Title title='latest' span='novels' />
    
    <Novel novels={latest} />

      <br /><br />
   
    <div className='release'>
<br /><br />
        <Title title='Latest' span='Release' />
        <br/><br/>
       <Release />
    </div>
   


     <br /><br />
    
    <Title title='Action' span='novels' />
    <br/>
    <Novel novels={latest} />

</div>
  </HomeStyled>


}
const HomeStyled = styled.div`

.home {
  margin-left: 5%;
  margin-right: 2%;
  border-radius: 20px;
  background-color: ${props=> props.theme.backgroundColor}
}

.release{
  background-color:#ffffff;
}



`;

export default Home;
