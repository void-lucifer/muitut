import React, { useState } from 'react';
import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup, FormHelperText } from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'


function MuiCheckbox() {
    const [terms, setTerms] = useState(false)
    console.log({ terms });

    const [skills, setSkills] = useState([])
    console.log(skills)
    const handleSkills = (e) => {
        const index = skills.indexOf(e.target.value)
        if(index === -1){
            setSkills([...skills, e.target.value])
        } else{
            setSkills(skills.filter((skill) => skill !== e.target.value))
        }
    }

    return (
        <Box>
            <Box>
                <FormControlLabel label='I accept the terms and conditions.'
                    control={<Checkbox size='small' color='secondary' checked={terms} onChange={(e) => setTerms(e.target.checked)} />} />
            </Box>

            <Box>
                <Checkbox
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                    checked={terms}
                    onChange={(e) => setTerms(e.target.checked)}
                />
            </Box>

            <Box>
                <FormControl>
                    <FormLabel error>Skills</FormLabel>
                    <FormGroup row>
                        <FormControlLabel label='React JS'
                            control={<Checkbox value='react' checked={skills.includes('react')} onChange={handleSkills}/>} />
                        <FormControlLabel label='Angular JS'
                            control={<Checkbox value='angular' checked={skills.includes('angular')} onChange={handleSkills} color='error'/>} />
                        <FormControlLabel label='Vue JS'
                            control={<Checkbox value='vue' checked={skills.includes('vue')} onChange={handleSkills} color='success'/>} />
                    </FormGroup>
                    <FormHelperText>Select appropriate skills.</FormHelperText>
                </FormControl>
            </Box>
        </Box>
    )
}

export default MuiCheckbox;