import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

function Header() {
    return <div className='header'>
        <HeaderStyled>            
            <Nav /><br/><br/>          
             
</HeaderStyled>
  </div>;
}
const HeaderStyled = styled.div`

`;

export default Header;
