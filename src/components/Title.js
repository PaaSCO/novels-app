import React from 'react'
import styled from 'styled-components'

function Title( {title,span}) {
    return (
        <TitleStyled>
        <div className='Title'>
            <h3 className='theTitle'>
                {title}
                <span>{span}</span>
            </h3>
            
            </div>
            </TitleStyled>
    )
}

const TitleStyled = styled.div`
.Title{    
    text-transform: uppercase;    
    position: relative;
    left:30px;
    padding-bottom: 1rem;
    letter-spacing: 3px;
    &::before{
        content: "";        
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: rgb(92, 23, 5);
        width: 6rem;
        height: .35rem;
        border-radius: 50px;
       
    }
    &::after{
        content: "";
        bottom: 0;
        position: absolute; 
        left: 0;
        background-color:rgb(233, 15, 15);
        width: 3rem;
        height: .3rem;
        border-radius: 50px;
    }
    .theTitle{
font-size: 1.1rem;
     color: #e60a71;
     font-family:'Arvo';
    }
    span{
        position: absolute;
        top: 15%;
        left: 0%;
        font-size: 3rem;
        opacity: 0.1;
        color: rgb(0, 13, 0);
    }
}


`;

export default Title
