import React from "react"
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, {AlertProps} from "@mui/material/Alert";
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

enum ClipboardStatusEnum {
    SUCCESS,
    ERROR,
}
export const useCopyToClipboard = () => {
    const [clipboardSnackbarOpen, clipboardSnackbarOpenSet] = React.useState<boolean>(false);
    const [clipboardStatusEnum, clipboardStatusEnumSet] = React.useState<ClipboardStatusEnum>(ClipboardStatusEnum.SUCCESS);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        clipboardSnackbarOpenSet(false);
    };

    const copyToClipboard = (data: string) => {
        if(navigator.clipboard === undefined) {
            clipboardStatusEnumSet(ClipboardStatusEnum.ERROR);
            clipboardSnackbarOpenSet(true);
            return;
        }
        navigator.clipboard.writeText(data)
            .then( () => {
                clipboardStatusEnumSet(ClipboardStatusEnum.SUCCESS);
                clipboardSnackbarOpenSet(true);
            })
            .catch( () => {
                clipboardStatusEnumSet(ClipboardStatusEnum.ERROR);
                clipboardSnackbarOpenSet(true);
            })
    }


    return { copyToClipboard, clipboardStatusEnum, clipboardSnackbarOpen, handleClose }
}

type ClipboardSnackbarProps = {
    clipboardStatusEnum: ClipboardStatusEnum,
    clipboardSnackbarOpen: boolean,
    handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void
}
export const ClipboardSnackbar = ({clipboardStatusEnum, clipboardSnackbarOpen, handleClose}: ClipboardSnackbarProps) => {
    return <Snackbar open={clipboardSnackbarOpen} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={ clipboardStatusEnum === ClipboardStatusEnum.SUCCESS ? 'success' : 'error' } sx={{ width: '100%' }}>
            { clipboardStatusEnum === ClipboardStatusEnum.SUCCESS ? 'Email copied to clipboard' : 'Something went wrong when copying' }
        </Alert>
    </Snackbar>
}