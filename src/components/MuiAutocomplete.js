import React, { useState } from 'react';
import { Stack, Autocomplete, TextField } from '@mui/material'

function MuiAutocomplete(){

    const skills = ['HTML', 'CSS', 'Javascript', 'Typescript', 'React']
    const skillsOptions = skills.map((skill,index) => ({
        id: index+1,
        label: skill,
    }))

    const [value, setValue] = useState(null)
    console.log({value});
    const [skill, setSkill] = useState(null)
    console.log(skill);

    return(
        <Stack spacing={2} width='250px'>
            <Autocomplete
                options={skills}
                renderInput={(params) => <TextField {...params} label='Skills' />}
                value={value}
                onChange={(e,val)=> setValue(val)}
                freeSolo //Allow value other than options
                />
            <br/>
            <Autocomplete
                options={skillsOptions}
                renderInput={(params) => <TextField {...params} label='Skills' />}
                value={value}
                onChange={(e,val)=> setSkill(val)}
                />
        </Stack>
    )
}

export default MuiAutocomplete;