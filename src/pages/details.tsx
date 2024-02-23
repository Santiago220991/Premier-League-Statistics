import React, {useEffect, useState} from "react";
import {useLeagueContext} from "../hooks";
import {
    LoadingComponent,
    Header,
    MainStatistics,
    SecondaryStatistics,
} from "../components";
import {Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import {LeagueStanding} from "../models";

function Details() {
    const {statistics} = useLeagueContext();
    const [teamStatistics, setTeamStatistics] = useState<LeagueStanding | null>(
        null,
    );
    const {id} = useParams();

    useEffect(() => {
        if (statistics) {
            const filteredStatistics = statistics.filter(
                standing => standing.team.id == Number(id),
            );
            setTeamStatistics(filteredStatistics[0]);
        }
    }, [statistics]);

    if (teamStatistics == null) {
        return <LoadingComponent />;
    }

    return (
        <div
            data-testid="details-container"
            style={{
                paddingLeft: "5%",
                paddingRight: "5%",
                paddingBottom: "5vh",
            }}>
            <Header />
            <MainStatistics teamStatistics={teamStatistics} />
            <Typography
                variant="h6"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "5vh",
                }}>
                <strong>HOME STATISTICS</strong>
            </Typography>
            <SecondaryStatistics sideStatistics={teamStatistics.home} />
            <Typography
                variant="h6"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "5vh",
                }}>
                <strong>AWAY STATISTICS</strong>
            </Typography>
            <SecondaryStatistics sideStatistics={teamStatistics.away} />
        </div>
    );
}

export default Details;
