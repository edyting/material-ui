import { AppBar, Avatar, Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import '../index.css'
import React from 'react'
import { AddCardOutlined, SubjectOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import {format} from 'date-fns'


// import { makeStyles } from '@mui';

const drawerWidth = 200;





function Layout({children}) {

const menuItems=[
    {
        text:"My Notes",
        icon: <SubjectOutlined color='secondary'/>,
        path:'/'
    },
    {
        text:"Create Notes",
        icon: <AddCardOutlined color='secondary'/>,
        path:'/create'
    },
];

const navigate = useNavigate();
const location = useLocation();

  return (
    <div className="">
        {/* nav bar */}
        <AppBar
        className={`w-[calc(100%-210px)] bg-white text-black`}
        elevation={0}
        >
            <Toolbar
            className={
                `flex justify-between`
            }
            >
                <Typography>
                   Today is {format(new Date,"do MMMM Y")} 
                </Typography>
               <Box
               className={`flex items-center gap-1`}
               >
               <Typography>
                   Manuel 
                </Typography>
                <Avatar src='/download.png' className=' ml-2'/>
               </Box>
            </Toolbar>
        </AppBar>

        {/* side bar */}
       <div className="flex">
       <Box
       sx={{
        width:{
            xs:240,
        }
       }}>
       <Drawer
        variant='permanent'
        anchor='left'
        sx={{
            '& .MuiDrawer-paper': { width:210 },
          }}
        >
            <div className="text-center py-3">
                <Typography variant='h5'>
                    EdytNotes
                </Typography>
            </div>
                {/* list links */}
            <List>
                {menuItems.map((item)=>(
                    <ListItem button key={item.text}
                    onClick={()=>navigate(item.path)}
                    className={location.pathname == item.path? 'bg-blue-100':null}
                    >
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
       </Box>
        {/* body */}
        <div className='bg-[#f9f9f9] w-[calc(100%-130px)] '>
            <div className="h-24"></div>
            {children}
         </div>
       </div>

    </div>
  )
}

export default Layout