import React from 'react';
import { Stack, Link, Typography } from '@mui/material'

function MuiLink() {
    return(
        <Stack spacing={2} direction='row' margin={4}>
            <Link href="#">Link</Link>
            <Typography variant='h6'>
                <Link href="#" underline='hover'>Hover</Link>
            </Typography>
            <Link href="#" color='secondary' underline='none' variant='body2'>Secondary</Link>
        </Stack>
    )
}

export default MuiLink;