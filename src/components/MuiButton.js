import { Stack, Button, ButtonGroup, IconButton } from '@mui/material'
import ReplyIcon from '@mui/icons-material/Reply';
import SendIcon from '@mui/icons-material/Send';
import AndroidIcon from '@mui/icons-material/Android';

function MuiButton() {
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <Button variant='text' href="https://google.co.in">Text (Google)</Button>
                <Button variant='contained'>Contained Button</Button>
                <Button variant='outlined'>Outlined Button</Button>
            </Stack>

            <Stack spacing={2} direction='row'>
                <Button variant='text' color='primary'>Primary</Button>
                <Button variant='text' color='secondary'>Secondary</Button>
                <Button variant='text' color='error'>Error</Button>
                <Button variant='text' color='warning'>Warning</Button>
                <Button variant='text' color='info'>Info</Button>
                <Button variant='text' color='success'>Success</Button>
            </Stack>

            <Stack spacing={2} direction='row'>
                <Button variant='contained' color='primary'>Primary</Button>
                <Button variant='contained' color='secondary'>Secondary</Button>
                <Button variant='contained' color='error'>Error</Button>
                <Button variant='contained' color='warning'>Warning</Button>
                <Button variant='contained' color='info'>Info</Button>
                <Button variant='contained' color='success'>Success</Button>
            </Stack>

            <Stack spacing={2} direction='row'>
                <Button variant='outlined' color='primary'>Primary</Button>
                <Button variant='outlined' color='secondary'>Secondary</Button>
                <Button variant='outlined' color='error'>Error</Button>
                <Button variant='outlined' color='warning'>Warning</Button>
                <Button variant='outlined' color='info'>Info</Button>
                <Button variant='outlined' color='success'>Success</Button>
            </Stack>

            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' size='small'>Small</Button>
                <Button variant='contained' size='medium'>Medium</Button>
                <Button variant='contained' size='large'>Large</Button>
            </Stack>

            <Stack display='block' spacing={2} direction='row'>
                <Button variant='outlined' startIcon={<ReplyIcon />} disableRipple onClick={() => alert('CLicked REPLY')}>Reply</Button>
                <Button variant='contained' endIcon={<SendIcon />} disableElevation>send</Button>

                <IconButton aria-label='send' color='success' size='small'><AndroidIcon /></IconButton>
            </Stack>

            {/* Button Group */}
            <Stack direction='row'>
                <ButtonGroup variant='outlined'>
                    <Button onClick={() => alert("Left Clicked")}>Left</Button>
                    <Button onClick={() => alert("Center Clicked")}>Center</Button>
                    <Button onClick={() => alert("Right Clicked")}>Right</Button>
                </ButtonGroup>
            </Stack>

            <Stack direction='row'>
                <ButtonGroup variant='contained' orientation='vertical' color='success' size='small' aria-label='alignment button'>
                    <Button onClick={() => alert("Top Clicked")}>Top</Button>
                    <Button onClick={() => alert("Middle Clicked")}>Middle</Button>
                    <Button onClick={() => alert("Bottom Clicked")}>Bottom</Button>
                </ButtonGroup>
            </Stack>
        </Stack>
    );
}

export default MuiButton;