import React from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Article from './Article';
import Title from './Title';
import useFetchNovels from './useFetchNovels';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from 'react';
import { db } from '../Firebase';
import {doc, updateDoc } from "firebase/firestore";
import { useEffect } from 'react';

function DisplayArticle() {
    const { novels } = useFetchNovels('novel');
  const { id, genre } = useParams();
  const [view, setView] = useState(0);
//get novel with this id
  const articles = novels.filter((novel) => novel.id === `${id}`);
     //get all trending novels
  const recommendedArticles = novels.filter((novel) => novel.type == 'article' );
  const recommended = recommendedArticles.filter((novel) => novel.genre === `${genre}` && novel.id != `${id}`).slice(0,3);
    
    let x 
useEffect(() => {
 const updateNovel = async (novel) => {
   novel.map((article) => {
    x=article.views + 1;   
     const noteRef = doc(db, "novel", article.id);
     updateDoc(noteRef, {
       views: x
     });
   })
   console.log(x);
   setView(x);
  };
  
 
   updateNovel(articles);

}, []);
  

   

   
 


  if (genre == 'ranking') {
    return (

        <RankingArticleStyled>
      <div className='Rankings'>
         {
            articles.map((article) => <>
                
                <h5 className='title'>{article.title}</h5>
                  
                  {
                article.ranks.map((rank, index) => <>
                    <br/>
                  <h5 className='name'><span className='num'>{ index+1}. </span>{rank.name}</h5>
                 <div className='img'><img className='image' src={rank.image} /></div> 
                  <h6 className='desc'>{rank.description}</h6><br/><br/>

                    
                    </>)
                      

                    
                  }
                
                </>
                  )
                 

            
        
                         
         }
        </div>

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
        </RankingArticleStyled>
      
    )
  }
  return (
      <DisplayArticleStyled>
            
            {
                articles.map((article) => (
                    <div className='container'>                      
                    <div className='date'>{article.date}</div><br />
                     <div className='views'><VisibilityIcon/> <span>{article.views} views</span></div><br/>
                        <h5 className="title">{article.title}</h5>
                    <div className='author'>{article.author}</div>                    
                        <img className="image" src={article.image} alt={article.title}/><br/>                    
                    <p className='content'>{article.content[0]}</p><br />
                    <h4 className='subtitle'>{article.subtitles[0]}</h4>
                    <p className='content'>{article.content[1]}</p><br />
                     <h4 className='subtitle'>{article.subtitles[1]}</h4>
                    <p className='content'>{article.content[2]}</p><br />
                     <h4 className='subtitle'>{article.subtitles[2]}</h4>
                    <p className='content'>{article.content[3]}</p><br />
                    <h4 className='subtitle'>{article.subtitles[3]}</h4>
                    <p className='content'>{article.content[4]}</p><br />
                     <h4 className='subtitle'>{article.subtitles[4]}</h4>
                    <p className='content'>{article.content[5]}</p><br />
                     <h4 className='subtitle'>{article.subtitles[5]}</h4>
                    <p className='content'>{article.content[6]}</p><br />
                     <h4 className='subtitle'>{article.subtitles[6]}</h4>
                        <p className='content'>{article.content[7]}</p><br />
                         
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

const RankingArticleStyled = styled.div`
background-color: ${props => props.theme.articleBack};
 opacity:90% ;

    padding-top:10rem ;

    margin-left:22% ;
    margin-right:22% ;


  
.Rankings{
  background-color: inherit ;
  
.title{
   color :${props => props.theme.textColor};
   font-size:2.2rem ; 
  margin-bottom:1rem;
}
  .name{
     color :${props => props.theme.textColor};
      font-size:1.1rem ;     
    margin-bottom:1rem;
    font-weight:bold ;
     opacity:0.9 ;
  }
  .num{
  color :${props => props.theme.textColor};
   font-size:1.1rem ;
   font-weight:bold ;
  }
  .img{
        max-width: 100%;
       background-color:${props => props.theme.rankBack};
       border:1px solid #cfe0e8;

      
      
      
    
  }
  .image{
     max-width: 80%;
   display: block;
  margin-left: auto;
  margin-right: auto;
  transform: scale(0.8);
  opacity:1 !important;

  }
  .desc{
color:${props=>props.theme.textColor} !important;
       font-size:1.2rem ;
       word-spacing:0.5px;
       line-height:1.8 ;
      font-family: 'Exo 2', sans-serif;
       font-weight:400;
       opacity:0.9 ;
       padding-top:2rem;
  }

    @media screen and (max-width: 900px) {
      
       margin-left:-18% !important;
       margin-right:-18% !important;
      
    }
}

`;

const DisplayArticleStyled = styled.div`
 background-color: ${props => props.theme.articleBack};
 opacity:90% ;

    padding-top:10rem ;

.container{

  .views{
display:flex ;
justify-content:center ;

  }
   
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
       margin-left:15%;
       margin-right:15% ;
      color:${props=>props.theme.textColor} !important;
       font-size:1.2rem ;
       word-spacing:0.5px;
       line-height:1.8 ;
      font-family: 'Exo 2', sans-serif;
       font-weight:400;
       opacity:0.9 ;
       
       
   }
   .subtitle{
     margin-left:15%;
       margin-right:15% ;
       font-weight:500;
       padding-bottom: 1.5rem;
        padding-top: 1.5rem;
        color:${props=>props.theme.textColor} !important;
       
   }
    @media screen and (max-width: 900px) {
      .content,.subtitle{
       margin-left:5%;
       margin-right:5% ;
      }
    }
}


`;



export default DisplayArticle