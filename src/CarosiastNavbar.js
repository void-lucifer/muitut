/* eslint-disable jsx-a11y/anchor-is-valid */
import { AppBar, Button, IconButton, InputAdornment, Stack, TextField, Toolbar, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from "react-router-dom";


function NavButton({ label, color }) {
    return (
        <Button variant='outlined' size='small' sx={{
            color: 'black',
            backgrounColor: '#eeeeee',
            borderRadius: '7px',
            fontWeight: 'bold',
            border: `1px solid white`,
            '&:hover': {
                borderColor: 'black',
            }
        }}>{label}</Button>
    )
}

export default function CarosiastNavbar() {
    const navigate = useNavigate()
    return (
        <>
            <AppBar position='static' sx={{
                backgroundColor: 'white',
                color: 'black',
            }}>
                <Toolbar sx={{
                    boxShadow: '0 0 6px 0 grey',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent:'space-between'
                }}>
                    <Typography variant='subtitle1' component='div'>CAROSIAST</Typography>
                    <TextField
                        hiddenLabel
                        placeholder='Search Cars or Brands'
                        size='small'
                        color='error'
                        variant='outlined'
                        mx='8px'
                        sx={{
                            width: '600px',
                            backgroundColor: '#efefef',
                        }}
                        InputProps={{ endAdornment: <InputAdornment position='end'><IconButton><SearchIcon /></IconButton></InputAdornment> }}
                        inputProps={{
                            style:{
                                padding: 8,
                                border: 0,
                                '&:hover':{
                                    border:'3px solid blue'
                                }
                            }
                        }}
                    />
                    <Stack direction='row' spacing={2}>
                        <Button variant='contained' size='small' sx={{
                            color: 'white',
                            backgroundColor: 'black',
                            fontWeight: 'bold',
                            '&:hover': {
                                backgroundColor: 'error.main',
                            },
                        }}>Login</Button>
                    </Stack>
                </Toolbar>
                <Toolbar>
                    <Typography variant='subtitle2' position='absolute' ><LocationOnIcon />New Delhi</Typography>
                    <Stack direction='row' spacing={2} margin='auto'>
                        <a onClick={() => navigate('/home')}><NavButton label='Home' /></a>
                        <a onClick={() => navigate('blogs')}><NavButton label='Blogs' /></a>
                        <a onClick={() => navigate('/brands')}><NavButton label='Brands' /></a>
                        <a onClick={() => navigate('/category')}><NavButton label='Category' /></a>
                        <a onClick={() => navigate('/about')}><NavButton label='About Us' /></a>
                        <a onClick={() => navigate('/contact')}><NavButton label='Contact' /></a>
                        <a><NavButton label='More...' /></a>
                    </Stack>
                </Toolbar>
            </AppBar>
        </>
    )
}