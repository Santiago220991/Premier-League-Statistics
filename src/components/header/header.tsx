import React from "react";
import {Typography} from "@mui/material";

function Header() {
    return (
        <header data-testid="header-container" style={{paddingTop: "5vh"}}>
            <Typography align="center" variant="h4">
                <strong>Premier League</strong>
            </Typography>
        </header>
    );
}

export default Header;
