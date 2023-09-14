import React from 'react'
import { Button, Stack,ButtonGroup, IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

function MUIButtons() {
    return (
        <stack>
            <Stack spacing={2} direction='row'>
                <Button variant='text' href='www.google.com'>text</Button>
                <Button variant='outlined'>outlined</Button>
                <Button variant='contained' >contained</Button>
            </Stack>
            <Stack spacing={2} direction="row" display='block' >
                <Button variant='text' size='small'>outlined</Button>
                <Button variant='outlined' size='medium'>text </Button>
                <Button variant='contained' size='large' color='error'>contained</Button>

            </Stack>
            <Stack spacing={2} direction="row" display='block' >
                <Button variant='contained' startIcon={<SendIcon/>}>send</Button>
                <Button variant='contained' endIcon={<SendIcon/>}>send</Button>
            </Stack>
            <Stack  spacing={2}  direction="row" display='block'>
                <ButtonGroup  variant='contained' >
                    <Button>press</Button>
                    <Button>press</Button>
                    <Button>press</Button>
                </ButtonGroup>
                
            </Stack>
            <Stack>
            <IconButton sx={{color:"pink" }}>
                <SendIcon />
            </IconButton>
            </Stack>
        </stack>

    )
}

export default MUIButtons