import { Skeleton, Stack, Box, Avatar, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function MuiSkeleton() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])
    return (
        <Stack spacing={4}>
            <Stack spacing={2} width='250px'>
                {/* default variant-text, animation-pulse*/}
                <Skeleton />
                <Skeleton variant='circular' height={40} width={40} animation={false} />
                <Skeleton variant='rectangular' height={125} width={250} animation='wave' />
            </Stack>
            <hr/>
            <Box sx={{width: '250px'}}>
                {loading ? (
                    <Skeleton variant='rectangular' width={256} height={144} animation='wave' />
                ) : (
                    <img src='https://source.unsplash.com/random/256x144' alt='skeleton' width={256} height={144} />
                )}
                <Stack direction='row' spacing={1} sx={{ width:'100%', marginTop:'16px'}}>
                    {loading ? (
                        <Skeleton variant='circular' height={40} width={40} animation='wave' />
                    ) : (
                        <Avatar>YK</Avatar>
                    )}
                    <Stack sx={{ width: '80%'}}>
                        {loading ? (
                            <>
                                <Typography variant='body1'>
                                    <Skeleton width='100%' animation='wave' />
                                </Typography>
                                <Typography variant='body1'>
                                    <Skeleton width='100%' animation='wave' />
                                </Typography>
                            </>
                        ) : (
                            <>
                                <Typography variant='body1'>
                                    React Mui Tutorial
                                </Typography>
                            </>
                        )}
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    )
}

export default MuiSkeleton