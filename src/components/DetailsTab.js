import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import { useEffect, useState } from "react";
import { db } from '../Firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import ReactPaginate from 'react-paginate';
 import { Link } from 'react-router-dom';

function TabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function DetailsTabs({ novels, id , theme }) {
  
  const DetailsTabStyled = styled.div`
  .details-tab{

    div.col.list-of-chapters{
      background-color:red !important;

    hr{   
      display:none
    }
    }
  }
  
  `;
  const [value, setValue] = React.useState(0);

  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    const chaptersRef = collection(db, "novel", `${id}`, "chapters");
    const q = query(chaptersRef, orderBy('number' , 'asc'));
    onSnapshot(q, (snapshot) => {      
      const chapters = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setChapters(chapters);   

    })   
    
      
      
  }, [id])

  const [pageNumeber, setPageNumber] = useState(0);
  const chaptersPerPage = 15;
  const pagesVisited = pageNumeber * chaptersPerPage;
  const pageCount = Math.ceil(chapters.length / chaptersPerPage);

  const displayChapters = chapters.slice(pagesVisited, pagesVisited + chaptersPerPage).map((chapter) => {
    return (             
             
              <div className='col list-of-chapters' key={chapter.id}>
                <Link to={`/read/${id}/${chapter.id}/${chapter.number}`} className='a-chapter'>  
               {chapter.title}</Link>                
                <hr style={{visibility:'hidden'}} />
                </div>
    );
  })

  const onPageChange = ({selected}) => {
    setPageNumber(selected);
  }

	const detailsBack = theme === 'light' ? 'white' : '#121212';


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='details-tab'>
      <DetailsTabStyled>
    <Box sx={{ width: '100%', backgroundColor: detailsBack}}>
      <Box >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"   textColor="secondary"
        indicatorColor="secondary" centered>
              <Tab label="Chapters" {...a11yProps(0)} sx={{color:'orange'}}/>
          <Tab label="Description" {...a11yProps(1)} sx={{color:'orange'}}/>          
        </Tabs>
      </Box>
        <TabPanel value={value} index={0} sx={{ color: 'black' }}>
          <div className='chapters'>
             <div className="row row-cols-2 row-cols-md-3 row-cols-xl-3">
              {displayChapters}
            </div>
            <ReactPaginate
            pageCount={pageCount}
            breakLabel=">>>"
            nextLabel="next >"
            previousLabel="< previous"
            onPageChange={onPageChange}
            containerClassName='pagination'
            previousLinkClassName='previousLink'
            activeClassName='activePage'
              />
          </div>
           
        
      </TabPanel>
        <TabPanel value={value} index={1}>
          <div className='desc'>
            {
              novels.map((novel) => (
                <div>
                  {novel.description}
                </div>
              ))
             } 
          </div>
       
      </TabPanel>
     
      </Box>
      </DetailsTabStyled>
      </div>
  );
  


}
