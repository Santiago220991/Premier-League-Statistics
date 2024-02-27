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
    AlertComponent,
    PointsFilter,
} from "../components";

function Home() {
    const {league, loading, searchedStatistics, error} = useLeagueContext();

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
            {error != false && (
                <AlertComponent severity="error" error={error} />
            )}
            <Header />
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                }}>
                <img src={league?.logo} />
                <Box
                    sx={{
                        marginTop: "3vh",
                        marginBottom: "3vh",
                        width: 200,
                    }}>
                    <SeasonSelector />
                </Box>
            </Box>
            <Box
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    paddingRight: "5%",
                    paddingLeft: "5%",
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
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: {xs: "column", sm: "row"},
                        columnGap: {sm: "5%"},
                        rowGap: "3vh",
                        width: {xs: 320, sm: 500},
                    }}>
                    <PointsFilter />
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
