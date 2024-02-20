import React from "react";
import {Typography} from "@mui/material";
import {useLeagueContext} from "../hooks";
import {LoadingComponent, TeamCard, SearchBar} from "../components";

function Home() {
    const {league, loading, searchedStatistics} = useLeagueContext();
    if (loading) {
        return <LoadingComponent />;
    }

    return (
        <div
            data-testid="home-container"
            style={{paddingLeft: "5%", paddingRight: "5%"}}>
            <header style={{marginTop: "5vh"}}>
                <Typography align="center" variant="h4">
                    <strong>Premier League</strong>
                </Typography>
            </header>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                }}>
                <img src={league?.logo} />
                <Typography sx={{marginTop: "5%"}}>2022-2023</Typography>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                }}>
                <Typography variant="h6">
                    <strong>TEAMS</strong>
                </Typography>
                <SearchBar />
            </div>
            <div>
                {searchedStatistics ? (
                    searchedStatistics.map((teamStatistics, index) => (
                        <TeamCard
                            teamStatistics={teamStatistics}
                            key={`teamCard-${index}`}
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
