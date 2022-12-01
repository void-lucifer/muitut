import { Alert, AlertTitle, Button, Stack } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check'
import React from 'react';

function MuiAlert() {
    return (
        <Stack spacing={2}>
            <Alert severity='error'>This is a error alert</Alert>
            <Alert severity='warning'>This is a warning alert</Alert>
            <Alert severity='info'>This is a info alert</Alert>
            <Alert severity='success'>This is a success alert</Alert>

            <Alert variant='outlined' severity='error'>This is a error alert</Alert>
            <Alert variant='outlined' severity='warning'>This is a warning alert</Alert>
            <Alert variant='outlined' severity='info'>This is a info alert</Alert>
            <Alert variant='outlined' severity='success'>This is a success alert</Alert>

            <Alert variant='filled' severity='error' onClose={() => alert('Close Alert')}>
                <AlertTitle>Error</AlertTitle>
                This is a error alert
            </Alert>
            <Alert variant='filled' severity='warning'>
                <AlertTitle>Warning</AlertTitle>
                This is a warning alert
            </Alert>
            <Alert variant='filled' severity='info'>
                <AlertTitle>Info</AlertTitle>
                This is a info alert
            </Alert>
            <Alert variant='filled' severity='success'
                icon={<CheckIcon fontSize='inherit' />}
                action={<Button color='inherit' size='small'>UNDO</Button>}
            >
                <AlertTitle>Success</AlertTitle>
                This is a success alert
            </Alert>
        </Stack>
    )
}

export default MuiAlert