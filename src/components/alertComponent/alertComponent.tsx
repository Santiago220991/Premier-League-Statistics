import React, {useState} from "react";
import {Alert, Snackbar} from "@mui/material";
import {Severity} from "../../models";

function AlertComponent({
    severity,
    error,
}: {
    severity: Severity;
    error: unknown;
}) {
    const [open, setOpen] = useState<boolean>(true);

    const handleClose = () => {
        setOpen(false);
    };

    let message = "Unknown Error";
    if (error instanceof Error) {
        message = error.message;
    }
    return (
        <Snackbar
            data-testid="alertComponent-container"
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}>
            {<Alert severity={severity}>{message}</Alert>}
        </Snackbar>
    );
}

export default AlertComponent;
