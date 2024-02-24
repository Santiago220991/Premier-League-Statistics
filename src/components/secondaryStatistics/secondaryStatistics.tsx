import React from "react";
import {Box, Typography} from "@mui/material";
import {SideStatistics} from "../../models";

function SecondaryStatistics({
    sideStatistics,
}: {
    sideStatistics: SideStatistics;
}) {
    return (
        <Box data-testid={"secondary-statistics-container"}
            sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "3vh",
                marginLeft:{sm:"20%"},
                marginRight:{sm:"20%"}
            }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                <Typography>
                    <strong>GAMES</strong>
                </Typography>
                <Typography>{sideStatistics.played}</Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                <Typography>
                    <strong>WON</strong>
                </Typography>
                <Typography>{sideStatistics.win}</Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                <Typography>
                    <strong>LOST</strong>
                </Typography>
                <Typography>{sideStatistics.lose}</Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                <Typography>
                    <strong>DRAW</strong>
                </Typography>
                <Typography>{sideStatistics.draw}</Typography>
            </Box>
        </Box>
    );
}

export default SecondaryStatistics;
