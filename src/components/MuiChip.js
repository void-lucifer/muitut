import React, { useState } from 'react';
import { Stack,Chip, Avatar } from '@mui/material'
import FaceIcon from '@mui/icons-material/Face'

function MuiChip() {
    const [chips, setChips] = useState(['Chip 1', 'Chip 2', 'Chip 3'])
    const handleDelete = (chipToDelete) => {
        setChips(chips => chips.filter((chip) => chip !== chipToDelete))
    }
    return(
        <Stack direction='row' spacing={1}>
            <Chip label='Chip Default'/>
            <Chip label='Chip Icon' color='primary' size='small' icon={<FaceIcon />} />
            <Chip label='Chip Outlined' color='secondary' size='large' variant='outlined' avatar={<Avatar>V</Avatar>} />
            <Chip label='Click' color='success' onClick={() => alert("Chip clicked")} />
            <Chip
                label='Delete'
                color='error'
                onClick={() => alert('Delete clicked')}
                onDelete={() => alert('Delete handler called')}
            />

            {chips.map(chip => (
                <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
            ))}
        </Stack>
    )
}

export default MuiChip