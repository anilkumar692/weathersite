import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    // Link,
    IconButton,
    Drawer,
    Divider
} from "@mui/material"
import RestaurantMenuRoundedIcon from '@mui/icons-material/RestaurantMenuRounded';
import '../../styles/HeaderStyle.css'


function Header() {
    const [mobilemode, setmobilemode] = useState(false)
    const handledrawertoggle = () => {
        setmobilemode(!mobilemode)
    }
    const drawer = (
        <Box onClick={handledrawertoggle}
            sx={{ textAlign: 'center' }}>
            <Typography
                variant='h4'
                component='div'
                color={'black'}
                sx={{ flexGrow: 1, my:2 }}>
                <RestaurantMenuRoundedIcon sx={{width:'60px',height:'60px',marginBottom:"-10px"}}/>
                Foodies
            </Typography>
            <Divider />
            {/* <Box sx={{ display: { xs: 'none', sm: 'block' } }}> */}
            <ul className='mobile-navigation'>
                <li>
                    <NavLink to={"/"}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/Menu"}>Menu</NavLink>
                </li>
                <li>
                    <NavLink to={"/About"}>About</NavLink>
                </li>
                <li>
                    <NavLink to={"/Contact"}>Contact</NavLink>
                </li>
            </ul>
            {/* </Box> */}
        </Box>
    )
    return (
        <div>
            <Box>
                <AppBar component='nav'
                 sx={{ bgcolor: 'purple' }}>
                    <Toolbar>
                        <IconButton
                            color='inherit'
                            aria-label='open drawer'
                            edge='start'
                            sx={{
                                mr: 2,
                                display: { sm: "none" },
                            }}
                            onClick={handledrawertoggle}
                        >
                            <MenuIcon />
                        </ IconButton>

                        <Typography
                         variant='h4'
                          component='div'
                           color={'white'} 
                           sx={{ flexGrow: 1 }}>
                            <RestaurantMenuRoundedIcon sx={{marginBottom:"-5px",marginRight:"5px" ,width:"40px",height:"40px" }} />
                            Foodies</Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <ul className='navigation-menu'>
                                <li>
                                    <NavLink activeClassName="active" to={"/"}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/Menu"}>Menu</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/About"}>About</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/Contact"}>Contact</NavLink>
                                </li>
                            </ul>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component='nav'>
                    <Drawer variant='temporary' open={mobilemode}
                        onClose={handledrawertoggle}
                        sx={{
                            display: {
                                xs: 'block', sm: 'none'
                            },
                            "&.MuiDrawer-paper": {
                                boxSizing: "border-box",
                                width: '240px',

                            },
                        }}>
                        {drawer}
                    </Drawer>
                </Box>
                <Toolbar/>
            </Box>
        </div>
    )
}

export default Header