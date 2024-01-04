import { Container, Grid ,Paper} from '@mui/material';
import React, { useEffect, useState } from 'react'
import NoteCard from '../components/NoteCard';
import Masonry from 'react-masonry-css'

export default function Notes() {

  const [notes,setNotes]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:8000/notes')
    .then(res=> res.json())
    .then((data) => setNotes(data))
  },[]);

  const handleDelete= async (id)=>{
    await fetch('http://localhost:8000/notes' + id,{
      method:"DELETE"
    })

    const newNotes = notes.filter(note => note.id != id);
    setNotes(newNotes)
  };

  let breakpionts={
    default:3,
    1100:2,
    700:1
}
  
  return (
    <Container>
      {/* <Grid container spacing={3}>  */}
      <Masonry
      breakpointCols={breakpionts}
      className='my-masonry-grid'
      columnClassName='my-masonry-grid_column'
      > 
      { notes.map(note =>(
        
        // <Grid item  xs={12} lg={4} md={6} key={note.id}>

        <div className="" key={note.id}>
          <NoteCard note={note} notes={notes} handleDelete={handleDelete}/>
          </div>

        // </Grid>
      ))}
      </Masonry>
      {/* </Grid> */}
    </Container>
  )
}
