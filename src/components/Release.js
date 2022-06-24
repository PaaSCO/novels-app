import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {randomUpdatedDate } from '@mui/x-data-grid-generator';


const columns = [
  { field: 'genre',width:180 },
  { field: 'title', width:450},
  {
    field: 'release',
    width: 180,
  },
  { field: 'author',width:180},
  { field: 'time', type: 'dateTime', width: 180 },
];

const rows = [
  {
    id: 1,
    genre: 'Fantasy',
    title:'Tamer of Cosmic Beasts',
    release: 'chapter 1',
    author : 'The Novel Man',
    time: randomUpdatedDate(),
  },
  {
    id: 2,
    genre: 'Fantasy',
    title:'The School Boy',
    release: 'chapter 50',
    author : 'Paa Solo',
    time: randomUpdatedDate(),
  },
  {
     id: 3,
    genre: 'Action',
    title:'The School Boy',
    release: 'chapter 50',
    author : 'Paa Solo',
    time: randomUpdatedDate(),
  },
  {
     id: 4,
    genre: 'Action',
    title:'The School Boy',
    release: 'chapter 50',
    author : 'Paa Solo',
    time: randomUpdatedDate(),
  },
  {
     id: 5,
    genre: 'Action',
    title:'The School Boy',
    release: 'chapter 50',
    author : 'Paa Solo',
    time: randomUpdatedDate(),
  },
  {
     id: 6,
    genre: 'Action',
    title:'The School Boy',
    release: 'chapter 50',
    author : 'Paa Solo',
    time: randomUpdatedDate(),
  },
];




export default function NewRelease() {
  const [sortModel, setSortModel] = React.useState([
    {
      field: 'title',
      sort: 'asc',
    },
  ]);

  return (
    <div style={{ height: 400, width: '95%', color: 'red' }}>
     
      <DataGrid  style={{color: 'orange'}}
        sortModel={sortModel}
        rows={rows}
        columns={columns}
        onSortModelChange={(model) => setSortModel(model)}
        />
       
    </div>
  );


}
