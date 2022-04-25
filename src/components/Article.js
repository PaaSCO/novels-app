import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useFetchNovels from './useFetchNovels';


function Article({article}) {
        // Retrieving all Novels
    const { novels } = useFetchNovels();
    const trending = novels.filter((novel) => novel.category === 'top_articles');
  return (
      <ArticleStyled>
          
           <div className='list-of-articles reading contain' key={article.id} >
         <Link to={`/display_articles/${article.id}/${article.genre}`}>  
       
          {/**  Create the card here */}
         
  <div class="card">
    <div class="card__header">
      <img src={article.image} alt="card__image" class="card__image" width="600"/>
    </div>
    <div class="card__body">
              <span class="tag tag-blue">{article.genre}</span>
              <h4>{ article.title}</h4>
              <p>{ article.content}</p>
    </div>
    <div class="card__footer">
      <div class="user">
        <img src="https://i.pravatar.cc/40?img=1" alt="user__image" class="user__image"/>
        <div class="user__info">
                  <h5>{article.author }</h5>
          <small>{article.date}</small>
        </div>
      </div>
    </div>
            </div>
           
            
                </Link>
                </div>
    </ArticleStyled>
  )
}
const ArticleStyled = styled.div`

.contain {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin-block: 2rem;
  gap: 2rem;
    background-color: ${props=> props.theme.articleBack};
  padding-bottom:2rem ;
}

img {
  max-width: 100%;
  display: block;
  object-fit: cover;
}

.card {
  display: flex;
  flex-direction: column;
  width: clamp(20rem, calc(20rem + 2vw), 22rem);
  overflow: hidden;
  box-shadow: 0 .02rem 0.04rem rgba(0, 0, 0, 0.1);
  border-radius: 0.5em;
background-color: ${props=> props.theme.articleBack};;
color: ${props => props.theme.textColor} !important;
 height: 35rem ;

 &:hover{
   box-shadow: 0 .05rem 0.06rem rgba(0, 0, 0, 255);
 }

}



.card__body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;
    background-color: ${props => props.theme.articleBack};
    color:${props => props.theme.textColor}!important;
}


.tag {
  align-self: flex-start;
  padding: .25em .75em;
  border-radius: 0.5em;
  font-size: .75rem;
}

.tag + .tag {
  margin-left: .5em;
}

.tag-blue {
  background: #cb2d3e;
background: linear-gradient(to bottom, #ef473a, #cb2d3e);
  color: #fafafa;
}



.card__body {
  p{
     color:${props => props.theme.textColor}!important;
    max-height:6.7rem  ;
    overflow-y:hidden;
    font-size:0.8rem ;
     background-color: ${props => props.theme.articleBack};
  }
  h4 {
  font-size: 1.1rem;
  text-transform: capitalize;
  color:${props => props.theme.textColor}
}
}
.card__footer {
  display: flex;
  padding: 1rem;
  margin-top: auto;
    background-color: ${props => props.theme.articleBack};
}

.user {
  display: flex;
  gap: .5rem;
}

.user__image {
  border-radius: 50%;
}
.user__info{

 h5{
   font-size:0.8rem ;
    color:${props => props.theme.textColor}
 }
  small {
 color:${props => props.theme.textColor}
}
}
`;
export default Article