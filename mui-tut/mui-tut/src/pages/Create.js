import React, { useState } from 'react';
import Typography from "@mui/material/Typography";
import { Button,Container,FormControlLabel,FormLabel,Radio,RadioGroup,TextField,FormControl } from '@mui/material';
import KeyboardArrowRightOutlinedIcon  from '@mui/icons-material/KeyboardArrowRightOutlined';
import {useNavigate} from 'react-router-dom'

export default function Create() {
    const navigate= useNavigate();
    const [title,setTitle]=useState('');
    const [details,setDetails]=useState('');
    const handleSubmit=(e)=>{
      e.preventDefault();

      if(title && details){
        fetch('http://localhost:8000/notes',{
          method:'POST',
          headers:{"Content-type":"application/json"},
          body:JSON.stringify({
            title,details,category
          })
        }).then(()=>navigate("/"))
      }
    };


    const [category,setCate]=useState('money');
  return (
    <Container>
      
       <Typography variant='h6'
        component='h2'
        gutterBottom
        color='textSecondary'
        className='text-[2rem]'
        
        >
        Create a new Note
        </Typography> 

        

        <form noValidate autoComplete='off' onSubmit={handleSubmit}>
          <TextField 
          onChange={(e)=>{
            setTitle(e.target.value);
          }}
          label='Note Title' variant='outlined' fullWidth required className='mb-2'  />

          <TextField
          onChange={(e)=>{
            setDetails(e.target.value);
          }}
          label='Details' multiline rows={4} variant='outlined' fullWidth required className='mb-2' />

          <FormControl className='my-2 block'>
           <FormLabel>category </FormLabel>
          <RadioGroup value={category} onChange={(e)=>{
            setCate(e.target.value);
            console.log(category);
          }} >
            <FormControlLabel value="money" control={<Radio/>} label="Money"/>
            <FormControlLabel value="todos" control={<Radio/>} label="Todos"/>
            <FormControlLabel value="reminders" control={<Radio/>} label="Reminder" />
            <FormControlLabel value="work" control={<Radio/>} label="Work"/>
            <FormControlLabel value="self" control={<Radio/>} label="Self"/>
      
          </RadioGroup>
          </FormControl>

        <Button
        endIcon={ <KeyboardArrowRightOutlinedIcon/> }
        type='submit'  variant='contained'
        className='text-xl bg-red-100 hover:bg-green-400 mb-2'>
          Submit
        </Button>


        </form>
          

        

    </Container>
  )
}
