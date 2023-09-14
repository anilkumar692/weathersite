import React from 'react'
import { Stack, TextField, InputAdornment } from '@mui/material'

function MUitextfield() {
    return (
        <Stack>
            <Stack direction='row' spacing={2}>
                <TextField label="Name" variant='standard' />
                <TextField label="Name" variant='outlined' />
                <TextField label="Name" variant='filled' />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label="small secondary" variant='outlined' color='secondary' size='large' />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label="Email Id" variant='outlined' color='secondary' size='small' required />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label="password" variant='outlined' color='secondary'
                    size='small' helperText="do not provide password" type='password' />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label="readonly" variant='outlined' color='secondary' size='small' required inputProps={{ readOnly: true }} />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label="Amount"
                 InputProps={{
                    startAdornment: <InputAdornment position='start'>$</InputAdornment>,
                }} 
                />
                <TextField label="weight" variant='outlined' color='secondary' InputProps={{
                    endAdornment: <InputAdornment position='end'>kg</InputAdornment>,
                }} />
            </Stack>
        </Stack>

    )
}

export default MUitextfield