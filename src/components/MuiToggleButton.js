import React, { useState } from "react";
import { Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';


function MuiToggleButton() {
    const [formats, setFormats] = useState([])
    console.log(formats)
    const handleFormats = (event, format) => {
        setFormats(format)
    }

    const [gender, setGender] = useState('')
    console.log(gender)
    const handleGender = (event, gendr) => {
        setGender(gendr)
    }

    return (
        <Stack spacing={4}>
            <Stack direction='row'>
                <ToggleButtonGroup size='small' color='error' value={formats} onChange={handleFormats}>
                    <ToggleButton value='bold' aria-label='bold'><FormatBoldIcon /></ToggleButton>
                    <ToggleButton value='italic' aria-label='italic'><FormatItalicIcon /></ToggleButton>
                    <ToggleButton value='underlined' aria-label='underlined'><FormatUnderlinedIcon /></ToggleButton>
                </ToggleButtonGroup>
            </Stack>
            <Stack direction='row'>
                <ToggleButtonGroup exclusive color='warning' orientation='vertical' value={gender} onChange={handleGender}>
                    <ToggleButton value='male' aria-label='male'>Male</ToggleButton>
                    <ToggleButton value='female' aria-label='female'>Female</ToggleButton>
                    <ToggleButton value='other' aria-label='other'>Other</ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
}

export default MuiToggleButton;