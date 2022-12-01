import React, { useState } from 'react';
import { Box, FormControl, FormLabel, FormControlLabel, FormHelperText, RadioGroup, Radio } from '@mui/material'

function MuiRadio() {
    const [exp, setExp] = useState('')
    console.log(exp)

    return (
        <Box>
            <FormControl error required>
                <FormLabel id='job-experience-group-label'>
                    Years of Experience
                </FormLabel>
                <RadioGroup
                name='job-experience-group'
                aria-labelledby='job-experience-group-label'
                value={exp}
                onChange={ (e) => setExp(e.target.value) }
                row //align-row
                >
                    <FormControlLabel control={<Radio color='error'/>} label='0-2' value='0-2' />
                    <FormControlLabel control={<Radio color='warning'/>} label='3-5' value='3-5' />
                    <FormControlLabel control={<Radio color='success'/>} label='6-10' value='6-10' />
                </RadioGroup>
                <FormHelperText>Choose correct option</FormHelperText>
            </FormControl>
        </Box>
    )
}

export default MuiRadio;