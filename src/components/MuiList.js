import React from 'react';
import { Box, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar, ListItemButton, Divider } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail'
function MuiList() {
    return(
        <Box
            sx={{
              width : '400px',
              bgcolor: '#efefff',
            }}>
            <List>
                <ListItem>
                    <ListItemIcon><MailIcon /></ListItemIcon>
                    <ListItemText primary='List item 1'></ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><MailIcon /></ListItemIcon>
                    <ListItemText primary='List item 2'></ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><MailIcon /></ListItemIcon>
                    <ListItemText primary='List item 3'></ListItemText>
                </ListItem>
            </List>
            <hr />
            <List>
                <ListItem disablePadding>
                <ListItemButton>
                    <ListItemAvatar><Avatar><MailIcon /></Avatar></ListItemAvatar>
                    <ListItemText primary='User 1' secondary='Test user'></ListItemText>
                </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemAvatar><Avatar><MailIcon /></Avatar></ListItemAvatar>
                    <ListItemText primary='User 2' secondary='Test user'></ListItemText>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemAvatar><Avatar><MailIcon /></Avatar></ListItemAvatar>
                    <ListItemText primary='User 3' secondary='Test user'></ListItemText>
                </ListItem>
            </List>
        </Box>
    )
}

export default MuiList;