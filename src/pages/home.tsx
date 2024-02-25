import React from "react";
import {Box, Typography} from "@mui/material";
import {useLeagueContext} from "../hooks";
import {
    LoadingComponent,
    TeamCard,
    SearchBar,
    Header,
    SeasonSelector,
    SortFilter,
} from "../components";

function Home() {
    const {league, loading, searchedStatistics} = useLeagueContext();

    if (loading) {
        return <LoadingComponent />;
    }

    return (
        <Box
            data-testid="home-container"
            style={{
                paddingLeft: "5%",
                paddingRight: "5%",
                paddingBottom: "5vh",
            }}>
            <Header />
            <Box
                style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                }}>
                <img src={league?.logo} />
                <Box sx={{marginTop: "3vh", marginBottom: "3vh", width: 200}}>
                    <SeasonSelector />
                </Box>
            </Box>
            <Box
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                }}>
                <Typography variant="h6">
                    <strong>TEAMS</strong>
                </Typography>
                <SearchBar />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "5vh",
                }}>
                <Box sx={{width: 320}}>
                    <SortFilter />
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: {xs: "column", sm: "row"},
                    columnGap: {sm: "3%", alignItems: "center"},
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}>
                {searchedStatistics &&
                    searchedStatistics.map((teamStatistics, index) => (
                        <TeamCard
                            teamStatistics={teamStatistics}
                            key={`teamCard-${index}`}
                        />
                    ))}
            </Box>
        </Box>
    );
}

export default Home;
