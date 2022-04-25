import React,{useState} from 'react'
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import useFetchNovels from './useFetchNovels';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import Article from './Article';


function Articles({theme}) {
      // Retrieving all Novels
  const { novels } = useFetchNovels();
   const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };  
const trending = novels.filter((novel) => novel.category === 'top_articles');

  //pignation
  //const{pageNum} =useParams()
  const [pageNumeber, setPageNumber] = useState(0);  
  const articlesPerPage = 10;
  const pagesVisited = pageNumeber * articlesPerPage;
  const pageCount = Math.ceil(trending.length / articlesPerPage);

   const displayarticles = trending.slice(pagesVisited, pagesVisited + articlesPerPage).map((article) => {
    return (             
             
      <Article article={article}/>
    );
  })
    
    const onPageChange = ({selected}) => {
    setPageNumber(selected);
  }
  return (
      <ArticlesStyled>
          
          <div className='top'>Articles</div>
<div className='article'>
         <div className='caro'>      
     <Carousel className="carousel" variant='dark' nextLabel='' prevLabel='' color='black'>
    
    
        {
          trending.map((trend) => (
       
               <Carousel.Item className='myItem' >
             <Link to={`/display_articles/${trend.id}/${trend.genre}`}>       
    <img
       className="mycarousel"
      src={trend.image}
      alt={trend.title}
    />

              <Carousel.Caption className="myitems">
                
                <h6 className='head'>Top Articles</h6><br/>
                  <h5 className='title'>{trend.title }</h5> <br/>
                <h6 className='date'>{trend.date} </h6>
                  <p className='author'>{trend.author} </p>
                  <p className='description'>{ trend.content}</p>
                      <br/>
                  <div className="category">
                    
                      <span>Read</span>
                     </div>
     
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
        
          ))
        }  
        </Carousel>
        </div>

        {/** The list of the articles **/}

        <div className="container" >
          <div className="row row-cols-1 row-cols-md-3 row-cols-xl-3">
 
        {
          displayarticles
            }
            </div>
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
                
              />
          </div>   
          </div>
      </ArticlesStyled>
  )
}

const ArticlesStyled = styled.div`
 background-color: ${props => props.theme.articleBack};
 padding-bottom:10rem ;
.caro{
  margin-bottom:6rem ;
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  height: 80px;
  width: 80px;
  outline: black;
  background-size: 100%, 100%;
  border-radius: 50%;
  border: 1px solid black;
  background-image: none;
}

.carousel-control-next-icon:after
{
  content: '>';
  font-size: 55px;
  color: red;
}

.carousel-control-prev-icon:after {
  content: '<';
  font-size: 55px;
  color: red;
}
.top{
    padding-top:10rem;
    padding-left:8rem;
}

.article {
  margin-left: 5%;
  margin-right: 2%;
  border-radius: 20px;
  background-color: ${props=> props.theme.articleBack};



  .carousel{
   margin:3rem;
   margin-top:0rem;
     background:${props=>props.theme.articleBack} ;

   .myItem{
     img{
       height:25rem;
       width:60%;    
     

     }
   }

   .myitems{
     width:22rem ;
     max-width:700px;
     max-height:inherit;
     
     position: absolute;
     left:50rem;
     top:0rem;
     .title{
       color:${props => props.theme.textColor};
      text-align:left;
     }
     h6{
         color:${props => props.theme.textColor};
      text-align:left; 
      color:red ;
     }
    .author{
         color:${props => props.theme.textColor} !important;
          text-align:left; 
          letter-spacing: 2px;
          font-size:.8rem ;

    }
     .date{
       color:${props => props.theme.textColor};
       font-weight:400;      
     }
     .description{
        color:${props => props.theme.textColor} !important;
          text-align:left;          
          font-size:.8rem ;
          max-height:5rem ;
          overflow-y: hidden;
     }
   }
  }

 @media screen and (max-width: 1320px) {

   .caro{
     position:relative;
   padding-bottom:15rem ;
   }
.carousel{
  height: 10rem ;
  

  .myItem{
     img{
       width:100% !important ;
     }
  }
  .myitems{
    display:none;
  }
  .desc{
    display:block;
  }

  .myitems{
    width:inherit;
    max-width:600px;
    max-height:400px;
    position: absolute;
    left:2rem;
    right:2rem;
    margin:auto;  
    top:2rem;
    display:block;
   background-color:${props=>props.theme.articleBack};
   opacity:0.8;
   border-radius:5%;

   h6,h5,p{
     text-align:center !important ;
   }


  }



}

}

@media screen and (max-width: 1200px) {
.category{
  display:none;
}


}
@media screen and (max-width:930px) {
  .desc{
    display:none;
  }
}


.category{
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  padding: 5px;
  margin-bottom: 45px;
  position: relative;
  transition: all 0.2s ease-in-out;

}
.category > * {
  position: absolute;
  top: 50%;
  left: 17%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -khtml-transform: translate(-50%, -50%);
}
.category > span {
  padding: 12px 30px;
  border: 1px solid #313131;
  background: transparent;
   color:${props => props.theme.textColor};
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 27px;
  transition: all 0.05s ease-in-out;
}
}







`;

export default Articles