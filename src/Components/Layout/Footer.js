import React from 'react'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
// import { Translate } from '@mui/icons-material';


function Footer() {
    return (
        <Box sx={{ textAlign: 'center', bgcolor: 'crimson', color: 'white', p: 3 }}>
            <Box sx={{
                my: 3,
                "& svg": {
                    fontSize: "40px",
                    cursor: "pointer",
                    mr: 2,
                },
                "& svg:hover":{
                    color:'black',
                    transform:'TranslateY(-5px)',
                    transition:'all 400ms ease'
                }
            }}>
                <InstagramIcon  ></InstagramIcon>
                <FacebookOutlinedIcon></FacebookOutlinedIcon>
                <TwitterIcon ></TwitterIcon>
                <GitHubIcon></GitHubIcon>

            </Box>
            <Typography
                variant='h6'
                sx={{
                    '@media (max-width:600px)': {
                        fontSize: '1rem',
                    }
                }}>
                All Rights Reserved &copy;Anil katara
            </Typography >
        </Box >
    )
}


export default Footer