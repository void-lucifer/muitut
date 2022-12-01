import React, { useState } from 'react';
import { Stack, Box, TextField, MenuItem } from '@mui/material'

function MuiSelect(){
    const [country, setCountry] = useState('')
    const handleChange = (e) => {
        setCountry(e.target.value)
    }
    const [countries, setCountries] = useState([])
    const handleChanges = (e) => {
        const value = e.target.value
        setCountries(typeof value==='string' ? value.split(','): value)
    }
    return(
        <Stack spacing={4}>
        <Box width='300px'>
            <TextField label='Select Country'
                select value={country}
                onChange={handleChange}
                fullWidth
                size='small'
                color='success'
                helperText='Please select your birth country.'>
                <MenuItem value='' disabled>--Select country--</MenuItem>
                <MenuItem value='IND'>India</MenuItem>
                <MenuItem value='USA'>United States of America</MenuItem>
                <MenuItem value='RUS'>Russia</MenuItem>
                <MenuItem value='JPN'>Japan</MenuItem>
                <MenuItem value='SKR'>South Korea</MenuItem>
            </TextField>
        </Box>
        <Box width='300px'>
            <TextField label='Select Countries'
                select value={countries}
                onChange={handleChanges}
                fullWidth
                color='secondary'
                helperText='Please select countries you want to work in.'
                SelectProps={{multiple:true}}>
                <MenuItem value='' disabled>--Select countries--</MenuItem>
                <MenuItem value='IND'>India</MenuItem>
                <MenuItem value='USA'>United States of America</MenuItem>
                <MenuItem value='RUS'>Russia</MenuItem>
                <MenuItem value='JPN'>Japan</MenuItem>
                <MenuItem value='SKR'>South Korea</MenuItem>
            </TextField>
        </Box>
        </Stack>
    )
}

export default MuiSelect;