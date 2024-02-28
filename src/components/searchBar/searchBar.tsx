import React, {useState} from "react";
import {Box, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {useLeagueContext} from "../../hooks";

function SearchBar() {
    const {setSearchName, searchName} = useLeagueContext();
    const [searchValue, setSearchValue] = useState<string>(searchName);

    const handleChange = (value: string) => {
        setSearchName(value);
        setSearchValue(value);
    };
    return (
        <Box
            data-testid="searchBar-container"
            sx={{display: "flex", alignItems: "flex-end"}}>
            <SearchIcon />
            <TextField
                id="searchBar"
                value={searchValue}
                variant="standard"
                onChange={event =>
                    handleChange(event.target.value.toLowerCase())
                }
                placeholder="Search team..."
            />
        </Box>
    );
}

export default SearchBar;
