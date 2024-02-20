import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {CardActionArea} from "@mui/material";
import {LeagueStanding} from "../../models";

function TeamCard({teamStatistics}: {teamStatistics: LeagueStanding}) {
    return (
        <Card
            data-testid="team-card-container"
            sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "5%",
                width: {xs: 320},
            }}>
            <CardActionArea>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "2%",
                    }}>
                    <img src={teamStatistics.team.logo} alt="team logo" />
                </div>
                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {teamStatistics.team.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {`Rank: ${teamStatistics.rank}`}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default TeamCard;
