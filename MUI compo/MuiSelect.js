import React,{useState} from 'react'

import { Box,MenuItem,TextField } from '@mui/material'

function MuiSelect() {
    const [country, setcountry] = useState(" ")
    const handlechange =(event)=>{
setcountry(event.target.value)
    }
  return (
    <Box width='250px'>
      <TextField
       label='select country'
        select 
        value={country}
         fullWidth
         onChange={handlechange}
          >
       <MenuItem value='IN'>india</MenuItem>
       <MenuItem value='AU'>Australia</MenuItem>
       <MenuItem value='US'>USA</MenuItem>
      </TextField>
    </Box>
  )
}

export default MuiSelect