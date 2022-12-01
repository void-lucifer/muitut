import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material'

function MuiCard() {
    return (
        <Box width='300px' p={2} >
            <Card>
                <CardMedia component='img' height='140' image='https://isotropic.co/wp-content/uploads/2022/04/react-768x438.png' alt='random-image' />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>React JS</Typography>
                    <Typography variant='body2' color='text.secondary'>
                        React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant='outlined' color='secondary' size='small'>Share</Button>
                    <Button variant='contained' color='info' size='small'>Learn More</Button>
                </CardActions>
            </Card>
            <Card>
                <CardMedia component='img' height='140' image='https://miro.medium.com/max/1400/1*cGDDA2mfYkjiIhGaN8gDoA.png' alt='random-image' />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>Angular JS</Typography>
                    <Typography variant='body2' color='text.secondary'>
                        AngularJS is a discontinued free and open-source JavaScript-based web framework for developing single-page applications. It was maintained mainly by Google and a community of individuals and corporations.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant='outlined' color='secondary' size='small'>Share</Button>
                    <Button variant='contained' color='info' size='small'>Learn More</Button>
                </CardActions>
            </Card>
            <Card>
                <CardMedia component='img' height='140' image='https://tincode-django.s3.amazonaws.com/media/courses/fc15a121-99ef-4118-9d7b-40cdd53e7825.jpg' alt='random-image' />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>Vue JS</Typography>
                    <Typography variant='body2' color='text.secondary'>
                        Vue.js is an open-source model-view-viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant='outlined' color='secondary' size='small'>Share</Button>
                    <Button variant='contained' color='info' size='small'>Learn More</Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default MuiCard;