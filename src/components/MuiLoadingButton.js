import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save'

function MuiLoadingButton() {
    return(
        <Stack direction='row' spacing={2}>
            <LoadingButton variant='outlined'>Submit</LoadingButton>
            <LoadingButton loading variant='outlined'>Submit</LoadingButton>
            <LoadingButton variant='outlined' loadingIndicator='Loading...'>Fetch Data</LoadingButton>
            <LoadingButton loading variant='outlined' loadingIndicator='Loading...'>Fetch Data</LoadingButton>
            <LoadingButton variant='outlined' loadingPosition='start' startIcon={<SaveIcon />}>Save</LoadingButton>
            <LoadingButton loading variant='outlined' loadingPosition='start' startIcon={<SaveIcon />}>Save</LoadingButton>
        </Stack>
    )
}

export default MuiLoadingButton