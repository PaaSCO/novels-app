import React,{useState} from 'react';
import styled from 'styled-components';
import './Details.css';
import ReactPaginate from 'react-paginate';
import { useParams } from 'react-router';
import './Read.css';
import underline from '../assets/images/underline2.png';


function ReadScreen({readings,allChapters}) {
 
const{pageNum} =useParams()
  const [pageNumeber, setPageNumber] = useState(0);  
  const chaptersPerPage = 1;
  const pagesVisited = pageNumeber * chaptersPerPage;
  const pageCount = Math.ceil(allChapters.length / chaptersPerPage);

 
  
   
  
  const displayChapters = allChapters.slice(pagesVisited, pagesVisited + chaptersPerPage).map((chapter) => {
    return (             
             
              <div className='list-of-chapters reading' key={chapter.id} >
        <h5 className='reading-title'> {chapter.title}</h5> 
         <div className='underline-img'>
          <img src={underline} alt='underline ' /> 
          </div>
               <p className='reading-content'>{chapter.content}</p>
                <hr/>
                
                </div>
    );
  })
    
 
    
    const onPageChange = ({selected}) => {
    setPageNumber(selected);
  }

    
  return <div className='read-screen'>
    <NovelStyled >
 
  <div className="container" >
 
        {
          displayChapters
        }
        <br /><br />
      
 <ReactPaginate
                  pageCount={pageCount}
                  breakLabel="..."
                  nextLabel=">"
                  previousLabel="<"
                  onPageChange={onPageChange}
                  containerClassName='pagination'
                  previousLinkClassName='previousLink'
                  activeClassName='activePage'
                  initialPage={`${pageNum}`-1}
              />
          </div>     
          
     
</NovelStyled>
  </div>   
  
 
  
}
const NovelStyled = styled.div`
background-image: url('footer.jpg');  
background-image:url('../assets/images/back7.jpg');
padding:0;
margin:0;
border-radius:30px;
h4,h5,h6{
  cursor:pointer;
}

.author{
   position:relative;
  
    top:1rem;
}
.rating{
    position:relative;
   
    top:1.5rem;
}
.genre{
     position:relative;
  
    top:1.5rem;
}
.category{
     position:relative;
   
    top:2rem;
}
.chapters{
     position:relative;
  
    top:3rem;
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

`;

export default ReadScreen;
