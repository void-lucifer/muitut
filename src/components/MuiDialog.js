import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { useState } from "react"

function MuiDialog() {
    const [open, setOpen] = useState(false)

    return(
        <>
            <Button onClick={() => setOpen(true)} variant='contained' color='success'>Open Dialog</Button>
            <Dialog aria-labelledby="dialog-title" open={open} onClose={() => setOpen(false)}>
                <DialogTitle id='dialog-title' aria-describedby="dialog-description">Submit the test?</DialogTitle>
                <DialogContent>
                    <DialogContentText id='dialog-description'>Are you sure you want to submit the test? You will not be able to edit after submitting.</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button variant='contained' autoFocus onClick={() => setOpen(false)}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default MuiDialog