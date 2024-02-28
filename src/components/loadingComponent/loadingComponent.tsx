import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import {purple, white} from "../../constants/colors";

function LoadingComponent() {
    return (
        <Box
            data-testid={"loading-component-container"}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "35vh",
                marginRight: {xs: "10vh", sm: "30vh", md: "50vh"},
                marginLeft: {xs: "10vh", sm: "30vh", md: "50vh"},
                border: "solid 2px black",
                borderRadius: 10,
                backgroundColor: purple,
            }}>
            <Typography variant="h3" sx={{marginTop: 5, color: white}}>
                Loading
            </Typography>
            <CircularProgress sx={{marginBottom: 5}} />
        </Box>
    );
}

export default LoadingComponent;
