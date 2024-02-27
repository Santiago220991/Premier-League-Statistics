import React from "react";
import {useLeagueContext} from "../../hooks";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from "@mui/material";
import {SortValue} from "../../models";

function SortFilter() {
    const {sortValue, setSortValue, sortStandings} = useLeagueContext();

    const changeSortValue = (value: SortValue) => {
        setSortValue(value);
        sortStandings(value);
    };

    return (
        <FormControl fullWidth>
            <InputLabel shrink>Sort By</InputLabel>
            <Select
                data-testid="sortFilter-container"
                id="sort-filter"
                value={sortValue}
                label="SortFilter"
                onChange={(
                    event: SelectChangeEvent<
                        "Name" | "Points_Low" | "Points_High"
                    >,
                ) => changeSortValue(event.target.value as SortValue)}>
                <MenuItem value={"Name"}>Name</MenuItem>
                <MenuItem value={"Points_High"}>Points: High to Low</MenuItem>
                <MenuItem value={"Points_Low"}>Points: Low to High</MenuItem>
            </Select>
        </FormControl>
    );
}

export default SortFilter;
