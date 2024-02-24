import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import {useLeagueContext} from "../../hooks";
import { FormControl } from "@mui/material";

const seasonsList = ["2019", "2020", "2021", "2022", "2023"];

function SeasonSelector() {
    const {season, setSeason} = useLeagueContext();

    return (
        <FormControl fullWidth>
            <InputLabel shrink >Season</InputLabel>
            <Select
                data-testid="seasonSelector-container"
                id="season-selector"
                value={season}
                label="Season"
                onChange={event => setSeason(event.target.value)}>
                {seasonsList.map((option, index) => (
                    <MenuItem key={`option-${index}`} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
        </FormControl >
    );
}

export default SeasonSelector;
