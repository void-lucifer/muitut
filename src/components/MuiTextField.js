import React, { useState } from "react";
import { Stack, TextField, InputAdornment } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';

function MuiTextField() {
    const [value, setValue] = useState('')
    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField label='Name' />
                {/* default= outlined */}
                <TextField label='Name' variant='filled' />
                <TextField label='Name' variant='standard' />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='Small-Secondary' size='small' color='secondary' />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='Username' required color='error'/>
                <TextField label='Password' 
                    type='password' 
                    InputProps={{ endAdornment: <InputAdornment position='end'><VisibilityIcon /></InputAdornment> }} 
                    required  
                    value={value} 
                    onChange={(e) => setValue(e.target.value)} 
                    error={!value} 
                    helperText={!value ? 'Required' : 'Do not share your password with anyone.'} 
                    color='error' />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='Username-disabled' disabled color='error' />
                <TextField label='Email' value='support@carosiast.com' InputProps={{ readOnly: true }} color='error' />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='Amount' InputProps={{ startAdornment: <InputAdornment position='start'>$</InputAdornment> }} color='error' />
                <TextField label='Weight' InputProps={{ endAdornment: <InputAdornment position='end'>kg</InputAdornment> }} color='error' />
            </Stack>
        </Stack>
    )
}

export default MuiTextField;