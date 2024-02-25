import {LeagueStanding} from "../models";

export const LowerToHigher = (a: LeagueStanding, b: LeagueStanding) => {
    if (a.points == b.points) {
        return b.rank - a.rank;
    }
    return a.points - b.points;
};

export const HigherToLower = (a: LeagueStanding, b: LeagueStanding) => {
    if (a.points == b.points) {
        return a.rank - b.rank;
    }
    return b.points - a.points;
};

export const ByName = (a: LeagueStanding, b: LeagueStanding) => {
    return a.team.name.localeCompare(b.team.name);
};

const sortOptions = {
    Name: ByName,
    Points_Low: LowerToHigher,
    Points_High: HigherToLower,
};

export default sortOptions;
