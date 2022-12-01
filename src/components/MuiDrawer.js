import React, { useState } from 'react';
import { Drawer, Box, Typography, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close';

function MuiDrawer() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    return (
        <>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={() => setIsDrawerOpen(true)}>
            <MenuIcon />
        </IconButton>
            {/* default - hidden */}
            <Drawer anchor='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <Box p={2} width="250px" textAlign='center' role='presentation'>
                    <IconButton onClick={() => setIsDrawerOpen(false)}><CloseIcon /></IconButton>
                    <Typography variant='h6' component='div'>Side Panel</Typography>
                </Box>
            </Drawer>
        </>
    )
}

export default MuiDrawer;