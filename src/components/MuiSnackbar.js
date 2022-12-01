import { Button, Snackbar, Alert } from "@mui/material"
import { forwardRef, useState } from "react"

const SnackbarAlert = forwardRef(
    function SnackbarAlert(props, ref){
        return <Alert elevation={6} ref={ref} {...props} />
    }
)

function MuiSnackbar(){
    const [open, setOpen] = useState(false)
    const handleClose = (event, reason) => {
        if(reason === 'clickaway') return
        else setOpen(false)
    }
    return(
        <>
            <Button variant="outlined" onClick={() => setOpen(true)}>Add/Submit</Button>
            {/* <Snackbar
                message='Submission successfull'
                autoHideDuration={3000}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical:'bottom',
                    horizontal:'center',
                }}
            /> */}
            <Snackbar open={open}
                autoHideDuration={4000}
                onClose={handleClose}
                anchorOrigin={{
                    vertical:'top',
                    horizontal:'right',
                }}
            >
                <SnackbarAlert onClose={handleClose} severity='success' variant='filled'>
                    Item Added successfully
                </SnackbarAlert>
            </Snackbar>
        </>
    )
}

export default MuiSnackbar