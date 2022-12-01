import React, { useState } from 'react';
import { Box, FormControlLabel, FormGroup, FormLabel, Switch } from '@mui/material'

function MuiSwitch() {
    const [darkTheme, setDarkTheme] = useState(false)
    console.log({ darkTheme })
    const handleDarkTheme = (e) => {
        setDarkTheme(e.target.checked)
    }

    const [colors, setColors] = useState([])
    console.log(colors)
    const handleColors = (e) => {
        const index = colors.indexOf(e.target.value)
        if(index === -1) setColors([...colors, e.target.value])
        else setColors(colors.filter(color => color !== e.target.value))
    }
    return (
        <Box>
            <Box>
                <FormControlLabel
                    label='Dark mode'
                    control={<Switch color='info' size='small' checked={darkTheme} onChange={handleDarkTheme} />}
                />
            </Box>
            <br />
            <Box>
                <FormLabel>Select Colors</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        label='Purple'
                        control={<Switch color='secondary' value='purple' checked={colors.includes('purple')} onChange={handleColors} />}
                    />
                    <FormControlLabel
                        label='Green'
                        control={<Switch color='success' value='green' checked={colors.includes('green')} onChange={handleColors} />}
                    />
                    <FormControlLabel
                        label='Orange'
                        control={<Switch color='warning' value='orange' checked={colors.includes('orange')} onChange={handleColors} />}
                    />
                </FormGroup>

            </Box>
        </Box>
    )
}

export default MuiSwitch;