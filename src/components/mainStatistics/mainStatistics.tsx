import React from "react";
import {Box, Typography} from "@mui/material";
import {LeagueStanding} from "../../models";
import {statisticDifference} from "../../utils";

function MainStatistics({teamStatistics}: {teamStatistics: LeagueStanding}) {
    const goalsScored = teamStatistics.all.goals.for;
    const goalsAgainst = teamStatistics.all.goals.against;

    return (
        <Box
            data-testid="main-statistics-container"
            sx={{
                display: "flex",
                justifyContent: "center",
                columnGap: "3%",
                marginTop: "5vh",
            }}>
            <img src={teamStatistics.team?.logo} />
            <Box>
                <Typography variant="h6">
                    <strong>{teamStatistics.team.name} </strong>
                </Typography>
                <Typography>
                    <strong>Rank:</strong> {teamStatistics.rank}
                </Typography>
                <Typography>
                    <strong>Points:</strong> {teamStatistics.points}
                </Typography>
                <Typography>
                    <strong>Games Won:</strong> {teamStatistics.all.win}
                </Typography>
                <Typography>
                    <strong>Games Lost:</strong> {teamStatistics.all.lose}
                </Typography>
                <Typography>
                    <strong>Goal Difference:</strong>{" "}
                    {statisticDifference(goalsScored, goalsAgainst)}
                </Typography>
            </Box>
        </Box>
    );
}
export default MainStatistics;
