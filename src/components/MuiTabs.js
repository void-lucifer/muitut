import { Box, Tab } from "@mui/material"
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { useState } from "react"
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import ContactlessIcon from '@mui/icons-material/Contactless';
import InfoIcon from '@mui/icons-material/Info';

function MuiTabs(){
    const [value, setValue] = useState('home')
    return(
        <Box>
            <TabContext value={value}>
                <Box sx={{borderBottom:1, borderColor: 'divider'}} width='500px'>
                    <TabList aria-label="Tabs example"
                        onChange={(event, newVal) => setValue(newVal)}
                        textColor='secondary'
                        indicatorColor='secondary'
                        // centered
                        variant='scrollable'
                        scrollButtons='auto'
                    >
                        <Tab label='Home' value='home' icon={<HomeIcon />} iconPosition='start' />
                        <Tab label='Favorites' value='favorite' icon={<FavoriteIcon />} iconPosition='start' />
                        <Tab label='Profile' value='profile' icon={<PersonIcon />} iconPosition='start' disabled />
                        <Tab label='Services' value='services' icon={<MiscellaneousServicesIcon />} iconPosition='start' />
                        <Tab label='Connect Us' value='contact' icon={<ContactlessIcon />} iconPosition='start' />
                        <Tab label='About' value='about' icon={<InfoIcon />} iconPosition='start' />
                    </TabList>
                </Box>
                <TabPanel value='home'>Home Panel</TabPanel>
                <TabPanel value='favorite'>Favorites Panel</TabPanel>
                <TabPanel value='profile'>Profile Panel</TabPanel>
                <TabPanel value='services'>Services Panel</TabPanel>
                <TabPanel value='connect'>Connect Panel</TabPanel>
                <TabPanel value='about'>About Panel</TabPanel>
            </TabContext>
        </Box>
    )
}

export default MuiTabs