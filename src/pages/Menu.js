import React from 'react'
import Layot from '../Components/Layout/Layot'
import { Box, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import {itemlist} from '../data/data'

function Menu() {
  return (
    <Layot>
      <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}  >
        {
          itemlist.map((menu) => (
            <Card sx={{maxWidth:"390px",display:"flex",m:3}} key={menu.id}>
              <CardActionArea>
              <CardMedia
               sx={{minHeight:"300px"}} 
               component={"img"} 
               src={menu.image}
                alt={menu.name} />

               <CardContent>
                <Typography variant='h4' gutterBottom component={'div'}>
                  {menu.name}
                </Typography>
                <Typography variant='h5' sx={{fontFamily:"cursive",color:"#9D44C0"}}>
                  {menu.description}
                </Typography>
                <Typography variant='h6'>
                 price:- {menu.price}
                </Typography>
               </CardContent>

              </CardActionArea>
            </Card>
          ))

        }
      </Box>
    </Layot>
  )
}

export default Menu