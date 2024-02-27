import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import {useLeagueContext} from "../../hooks";
import {InputLabel} from "@mui/material";
import {gray} from "../../constants";

function PointsFilter() {
    const {pointsRate, setPointsRate} = useLeagueContext();

    const handleChange = (value: string) => {
        setPointsRate(Number(value));
    };

    return (
        <FormControl
            data-testid="pointsFilter-container"
            sx={{
                paddingLeft: 2,
                paddingTop: 1,
                paddingRight: 1,
                paddingBottom: 1,
                border: `solid #B5B5B6 1px`,
                borderRadius: 1,
            }}>
            <InputLabel
                sx={{backgroundColor: gray, paddingLeft: 0.5, paddingRight: 2}}
                shrink>
                Points Filter
            </InputLabel>
            <RadioGroup
                row
                aria-labelledby="points-filter-label"
                name="points-filter-name"
                value={pointsRate}
                onChange={event => handleChange(event.target.value)}
                sx={{display: "flex", justifyContent: "space-between"}}>
                <FormControlLabel
                    value={100}
                    control={<Radio />}
                    label="< 100"
                />
                <FormControlLabel value={75} control={<Radio />} label="< 75" />
                <FormControlLabel value={50} control={<Radio />} label="< 50" />
            </RadioGroup>
        </FormControl>
    );
}

export default PointsFilter;
