import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem } from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

function MuiNavbar() {
    const [anchor, setAnchor] = useState(null)
    const open = Boolean(anchor)
    return(
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <CatchingPokemonIcon />
                </IconButton>
                <Typography variant='h6' component='div' sx={{flexGrow:1}}>
                    POKEMONAPP
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color="inherit">Features</Button>
                    <Button color="inherit">Pricing</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit"
                        id="resources-btn"
                        onClick={(event) => setAnchor(event.currentTarget)}
                        aria-controls={open ? 'resources-menu' : undefined}
                        aria-haspopup='true'
                        aria-expanded={open ? true : undefined}
                        endIcon={<KeyboardArrowDownIcon />}>
                        Resources
                    </Button>
                    <Button color="inherit">Login</Button>
                </Stack>
                <Menu id='resources-menu' anchorEl={anchor} open={open}
                    MenuListProps={{'aria-labelledby': 'resources-button'}}
                    onClose={() => setAnchor(null)}
                    anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                    transformOrigin={{vertical: 'top', horizontal: 'right'}}>
                    <MenuItem onClick={() => setAnchor(null)}>Blog</MenuItem>
                    <MenuItem onClick={() => setAnchor(null)}>Podcast</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}

export default MuiNavbar;