import React from 'react';
import { Box, Stack, Divider, Grid, Paper } from '@mui/material'

function MuiLayout() {
    return (
        <>
            {/* manage layout in one dimension either horizontal or vertical*/}
            {/* default - display:flex, flexDirection:column */}
            <Stack 
                direction='row' //row, column, row-reverse, column-reverse
                spacing={2} //*8px
                divider={<Divider orientation='vertical' flexItem />}
                sx={{
                    border: '3px solid',

                }}>
                {/* default - replacement of div */}
                <Box
                    // component='span' //define custom component
                    sx={{
                        backgroundColor: 'primary.main',
                        color: 'white',
                        height: '150px',
                        width: '150px',
                        padding: '16px',
                        textAlign: 'center',
                        transition: 'all 0.5s ease-in-out',
                        '&:hover': {
                            backgroundColor: 'secondary.light',
                            transform: 'translateX(30px)',
                            borderRadius: '16px',
                            border: 3,
                            borderColor: 'text.primary',
                        }
                    }}>
                    Void x Lucifer
                </Box>

                <Box
                    display='flex'
                    height='150px'
                    width='150px'
                    bgcolor='success.light'
                    p={2} //multiply by 8px,
                >
                    DEMO
                </Box>
            </Stack>

            {/* 
                manage 2d responsive layouts 
                have 12 columns
                5 breakpoints : xs(mobile), sm(tablet), md(desktop), lg, xl
                item can be assigned column no. manually
            */}
            <Grid container my={4} rowSpacing={2} columnSpacing={1} /*spacing={2}*/>
                <Grid item xs={12} sm={6} >
                    <Box bgcolor='primary.main' p={2}>Item-1</Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor='primary.light' p={2}>Item-2</Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor='primary.main' p={2}>Item-3</Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor='primary.light' p={2}>Item-3</Box>
                </Grid>
            </Grid>

            <Paper sx={{padding: '32px'}} elevation={5}>
                <Box mx='auto'>
                    Material UI Tutorial - Code Evolution
                </Box>
            </Paper>
        </>
    )
}

export default MuiLayout;