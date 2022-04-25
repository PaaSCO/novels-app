import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Article from './Article';
import Title from './Title';
import useFetchNovels from './useFetchNovels';

function DisplayArticle() {
    const { novels } = useFetchNovels('novel');
    const { id, genre } = useParams();

//get novel with this id
    const articles = novels.filter((novel) => novel.id === `${id}`);
     //get all trending novels
 const recommendedArticles = novels.filter((novel) => novel.type == 'article' );
  const recommended = recommendedArticles.filter((novel) => novel.genre === `${genre}` && novel.id === `${id}`).slice(0,3);
    return (
      <DisplayArticleStyled>
            
            {
                articles.map((article) => (
                    <div className='container'>
                     
                       <div className='date'>{article.date}</div><br />
                        <h5 className="title">{article.title}</h5>
                         <div className='author'>{article.author}</div>
                        <img className="image" src={article.image} alt={article.title}/><br/>                    
                        <p className='content'>{article.content}</p><br/>
                         
                    </div>
                    
                    
                    
                ))
            }

            {/**  Recommended articles */}
<Title title='Recommended Articles' span='Articles'/>
             <div className="container" >
        <div className="row row-cols-1 row-cols-md-3 row-cols-xl-3">
          {
            recommended.map((novel) => (
               <Article article={novel}/>

            ))}
        
          </div>
 </div>
            
            </DisplayArticleStyled>
  )
}

const DisplayArticleStyled = styled.div`
 background-color: ${props => props.theme.articleBack};
 opacity:90% ;

    padding-top:10rem ;

.container{
   
 .title{
      color :${props => props.theme.textColor};
      text-align:center ;
     
    margin-bottom:1rem;
    }
    .author{
        color:${props => props.theme.textColor} ;
         text-align:center ;
             margin-bottom:4rem;
             font-family:'Tangerine' ;
             font-size:2rem;
    }
    .date{
        color:red;   
    text-align:center ;
   
    }
    .image{
        max-width:100% ;
        max-height:25rem ;
        display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
   margin-bottom:3rem ;
    }

   .content{
       margin-left:12%;
       margin-right:12% ;
      color:${props=>props.theme.textColor} !important;
       font-size:1.2rem ;
       word-spacing:0.5px;
       line-height:1.8 ;
       font-family: 'Roboto';
       font-weight:500
       
   }
    @media screen and (max-width: 900px) {
      .content{
       margin-left:5%;
       margin-right:5% ;
      }
    }
}


`;

export default DisplayArticle