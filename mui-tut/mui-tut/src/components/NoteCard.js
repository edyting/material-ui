import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

function NoteCard({note,handleDelete}) {
    let border ;
    let avbg;
    if (note.category == 'work'){
        border='border-4 border-solid border-red-200';
        avbg='bg-yellow-500'
    }
    if (note.category == 'reminders'){
        border='border-4 border-solid border-blue-200';
        avbg='bg-green-500'
    }
    if (note.category == 'todos'){
        border='border-4 border-solid border-green-200';
        avbg='bg-pink-500'
    }

   

  return (
    <div>
        <Card
        className={` ${border}`}
        elevation={1}>
            <CardHeader
                avatar={
                    <Avatar
                    className={`${avbg}`}
                    >
                        {note.category[0].toUpperCase()}
                    </Avatar>
                }
                action={
                    <IconButton onClick={()=>{
                        handleDelete(note.id)
                    }}>
                        <DeleteOutlinedIcon/>
                    </IconButton>
                }
                title={note.title}
                subheader={note.category}
            />
            <CardContent>
                <Typography variant='body2' color="textSecondary">
                    {note.details}
                </Typography>
            </CardContent>
        </Card>
    </div>
  )
}

export default NoteCard