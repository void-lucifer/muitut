import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'

function MuiBottomNavigation() {
    const [nav, setNav] = useState(0)
    return(
        <BottomNavigation
            sx={{
                width: '100%',
                position: 'absolute',
                bottom: 0,
                }}
            value={nav}
            onChange={(e, val) => setNav(val)}
            showLabels
        >
            <BottomNavigationAction label='Home' icon={<HomeIcon />} />
            <BottomNavigationAction label='Favorites' icon={<FavoriteIcon />} />
            <BottomNavigationAction label='Profile' icon={<PersonIcon />} />
        </BottomNavigation>
    )
}

export default MuiBottomNavigation;