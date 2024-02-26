import React from "react";
import {Box, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {useLeagueContext} from "../../hooks";

function SearchBar() {
    const {setSearchName} = useLeagueContext();

    return (
        <Box
            data-testid="searchBar-container"
            sx={{display: "flex", alignItems: "flex-end"}}>
            <SearchIcon />
            <TextField
                id="searchBar"
                variant="standard"
                onChange={e => setSearchName(e.target.value.toLowerCase())}
                placeholder="Search team..."
            />
        </Box>
    );
}

export default SearchBar;
