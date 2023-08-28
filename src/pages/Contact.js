import React from 'react'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Layot from '../Components/Layout/Layot'
import { Box,Table, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'


function Contact() {
  return (
    <Layot>
      <Box sx={{ my: 10, ml: 3,mr:3, fontSize:"20px","& h4": { fontWeight: "bold", mb: 2, color: "black" } }}>
        <Typography variant='h3'>
          Contact us
        </Typography>
       
        <p>
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Enim eum tempore iste
          nam nostrum totam iusto rem consequuntur? Accusamus, nulla?<br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, magnam.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi dignissimos distinctio dicta odit, evenie
          t recusandae et dolor dolore delectus impedit sapiente ratione accusantium assumenda reprehenderit esse
           id dolorem nemo aspernatur adipisci deserunt architecto eligendi 
          cum. Eligendi possimus nostrum itaque labore, eos nesciunt mollitia atque ad saepe dolore odio. Vitae, atque!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eos debitis autem, quisquam soluta facere, recusandae impedit id unde commodi, totam a. Accusantium adipisci vel inventore porro ipsa quae voluptas necessitatibus commodi?
           Magni facilis blanditiis sint quos? Veniam consectetur molestiae cumque, non ullam ipsa assumenda itaque deserunt numquam at in.
        </p>
      </Box>
      <Box sx={{m:3}}>
        <TableContainer component={Paper}>
          <Table aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: "black", color: "white",fontSize:"25px" }} align='center'>Contact details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
                <TableRow>
                  <TableCell  sx={{fontSize:"20px"}}>
                    <SupportAgentIcon sx={{ color: "purple", mb: 0, width: "40px", height: "40px" ,marginBottom:"-10px" , }}/>1800-00-0000
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell  sx={{fontSize:"20px"}}>
                    <PhoneIcon  sx={{ color: "purple", mb: 0, width: "40px", height: "40px" ,marginBottom:"-10px" ,}}></PhoneIcon>
                    8006720129
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{fontSize:"20px"}}>
                    <EmailIcon sx={{ color: "purple", mb: 0, width: "40px", height: "40px" ,marginBottom:"-10px" ,}}></EmailIcon>
                    anilkatara1111@gmail.com
                  </TableCell>
                </TableRow>
            
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layot>
  )
}

export default Contact