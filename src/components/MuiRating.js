import React, { useState } from 'react';
import { Stack, Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

function MuiRating() {
    const [rating, setRating] = useState(null)
    console.log({rating});
    const handleRating = (e, val) => {
        setRating(val)
    }

    return(
        <Stack spacing={2}>
            <Rating
               value={rating}
               onChange={handleRating}
               precision={0.5}
               size='large'
               icon={<FavoriteIcon fontSize='inherit' color='error' />}
               emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
               highlightSelectedOnly
            //    readOnly
            />
        </Stack>
    )
}

export default MuiRating;