import React, {ReactElement, useState} from "react";
import {Box, Fade, FormControlLabel, Switch} from "@mui/material";

function TransitionComponent({children}: {children: ReactElement}) {
    const [checked, setChecked] = useState<boolean>(false);

    const handleChange = () => {
        setChecked(prev => !prev);
    };

    return (
        <Box data-testid="transitionComponent-container">
            <FormControlLabel
                sx={{marginBottom: "2vh"}}
                control={<Switch data-testid="switch-button" checked={checked} onChange={handleChange} />}
                label="Show Filters"
            />
            {checked ? (
                <Box sx={{display: "flex"}}>
                    <Fade in={checked}>{children}</Fade>
                </Box>
            ) : (
                <div />
            )}
        </Box>
    );
}

export default TransitionComponent;
