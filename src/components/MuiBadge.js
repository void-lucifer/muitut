import React from 'react';
import { Stack, Badge } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

function MuiBadge(){
    return(
        <Stack margin={4} spacing={4} direction='row'>
            <Badge badgeContent={6} color='primary'>
                <MailIcon size='large' />
            </Badge>
            <Badge badgeContent={6} color='secondary'>
                <MailIcon size='large' />
            </Badge>
            <Badge badgeContent={0} color='error'>
                <MailIcon size='large' />
            </Badge>
            <Badge badgeContent={0} color='error' showZero>
                <MailIcon size='large' />
            </Badge>
            <Badge badgeContent={100} color='warning'>
                <MailIcon size='large' />
            </Badge>
            <Badge badgeContent={100} color='warning' max={999}>
                <MailIcon size='large' />
            </Badge>
            <Badge badgeContent={1000} color='warning' max={999}>
                <MailIcon size='large' />
            </Badge>
            <Badge variant='dot' color='primary'>
                <MailIcon size='large' />
            </Badge>
            <Badge variant='dot' color='primary' invisible={true}>
                <MailIcon size='large' />
            </Badge>
        </Stack>
    )
}

export default MuiBadge