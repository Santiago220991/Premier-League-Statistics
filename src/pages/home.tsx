import React from "react";
import {Typography} from "@mui/material";
import {useLeagueContext} from "../hooks";
import {TeamCard} from "../components";

function Home() {
    const {statistics, league} = useLeagueContext();

    return (
        <div data-testid="home-container">
            <header>
                <Typography align="center" variant="h4">
                    Premier League
                </Typography>
            </header>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    paddingLeft: "5%",
                    paddingRight: "5%",
                }}>
                <img src={league?.logo} />
                <Typography sx={{marginTop: "5%"}}>2022-2023</Typography>
            </div>
            <div>
                {statistics ? (
                    statistics.map((teamStatistics, index) => (
                        <TeamCard
                            teamStatistics={teamStatistics}
                            key={`actionAreaCard-${index}`}
                        />
                    ))
                ) : (
                    <div />
                )}
            </div>
        </div>
    );
}

export default Home;
