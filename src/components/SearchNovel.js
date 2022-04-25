import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Novel from './Novel';
import { db } from '../Firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import styled from 'styled-components';
import search_img from '../../src/assets/images/search.png'
import { Link, NavLink } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Article from './Article';
function SearchNovel() {
  const { value} = useParams();

  const [novels, setNovels] = useState([]);
	const [search, setSearch] = useState('');
	const [age, setAge] = useState(1);

	  const handleChange = (event) => {
    setAge(event.target.value);
	};
	
	const displaySearch = (id) => {
		if (age == 1) {
			<div>

			</div>
		}
		else {
			
		}
	}

    useEffect(() => {
    const novelsRef = collection(db, "novel");
    const q = query(novelsRef, orderBy('title' , 'desc'));
    onSnapshot(q, (snapshot) => {      
      const novels = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNovels(novels);   

    })   
    
      
      
	}, [value])   
	

	const baseOnSort1 = novels.filter((novel) => novel.type === 'ebook'); 
  const newValue = value.toLocaleLowerCase();
 const baseOnSort = age === 1 ? novels.filter((novel) => novel.type === 'ebook') : novels.filter((novel) => novel.type === 'article')
  const displayResults = value === 'allresourceseatthescroll' ? 'All' : value;
    const mySearchNovels = newValue === 'allresourceseatthescroll' ? baseOnSort : baseOnSort.filter(novel => novel.title.toLocaleLowerCase().includes(newValue));
     
    
    return <div className='search'>
      <SearchStyled>
           <div className="header_search">
					<form action="#"  id="header_search_form">
						<input type="text" className="search_input" onChange={(e)=> setSearch(e.target.value)} placeholder="Search Resources" required="required"/>
		 <Link to={`/search/${search}`}> <button className="header_search_button"><img src={search_img} alt=""/></button></Link>
					</form>
			</div>
			<div className='sort'>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Ebooks</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Books"
					>
						
          <MenuItem value="">
            <em></em>
          </MenuItem>
          <MenuItem value={1}>Books</MenuItem>
          <MenuItem value={2}>Articles</MenuItem>
         
        </Select>
      </FormControl>
    </div>
        <h6><span>{mySearchNovels.length}</span> result(s) for "{displayResults}"</h6>        
           
        <div className='results-item'>
         
				{
					age===1 ? <Novel novels={mySearchNovels} /> :    <div className="container" >
        <div className="row row-cols-1 row-cols-md-3 row-cols-xl-3">
          {
            mySearchNovels.map((novel) => (
               <Article article={novel}/>

            ))}
        
            </div>
                        </div>
		 }
          </div>
        </SearchStyled>
  </div>;
}

const SearchStyled = styled.div`

   
   h6{
     position: relative;
     top: 8rem;
     text-align:center;
     color:${props => props.theme.textColor};
	 opacity:80%;

     span{
       color:red;
       font-size:1.3rem;
	    opacity:80%;
     }
   }
.header_search
{
	padding-top: 10rem !important;
 margin: auto;
  width: 50%;

  padding: 10px;
}
.header_search_form
{
	display: block;
}
.search_input
{
	width: 260px;
	height: 39px;
	border: solid 0.5px #4a4a4a;
	border-radius: 20px;
	outline: none;
	text-align: center;
	font-size: 16px;
	color: #2e2e2e;
	font-weight: 300;
	box-shadow: 0 0 1px 0px #4a4a4a inset, 0 0 1px 0px #4a4a4a;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.search_input:focus,
.search_input:hover
{
	border-color: #a30474;
	box-shadow: 0 0 1px 0px #2fce98 inset, 0 0 1px 0px #2fce98;
}
.search_input::-webkit-input-placeholder
{
	font-size: 16px !important;
	font-weight: 300 !important;
	color: #2e2e2e !important;
}
.search_input:-moz-placeholder
{
	font-size: 16px !important;
	font-weight: 300 !important;
	color: #2e2e2e !important;
}
.search_input::-moz-placeholder
{
	font-size: 16px !important;
	font-weight: 300 !important;
	color: #2e2e2e !important;
}
.search_input:-ms-input-placeholder
{
	font-size: 16px !important;
	font-weight: 300 !important;
	color: #2e2e2e !important;
}
.search_input::input-placeholder
{
	font-size: 16px !important;
	font-weight: 300 !important;
	color: #2e2e2e !important;
}
.header_search_button
{
	position: relative;
	top: 22px;
	left:-43px;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	right: 0;
	width: 14px;
	height: 19px;
	border: none;
	outline: none;
	background: transparent;
	cursor: pointer;
  display:none ;
}
 
 .sort{
	 margin: auto;
  width: 50%;
  padding: 10px;
 }

 .results-item{
 margin-top:150px;

 
 }

`;

export default SearchNovel;
