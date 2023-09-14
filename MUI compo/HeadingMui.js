import React from 'react'
import { Typography } from '@mui/material'

function HeadingMui() {
    return (
        <div>
            <Typography variant='h1'>h1 heading</Typography>
            <Typography variant='h2'>h2 heading</Typography>
            <Typography variant='h3'>h3 heading</Typography>
            <Typography variant='h4'>h4 heading</Typography>
            <Typography variant='h5'>h5 heading</Typography>
            <Typography variant='h6' component='h1' gutterBottom >h6 heading</Typography>
            <Typography variant='subtitle1'>h6 heading</Typography>
            <Typography variant='subtitle2'>h6 heading</Typography>
            <Typography variant='body1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, quos?</Typography>
            <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quis.</Typography>
        </div>
    )
}

export default HeadingMui