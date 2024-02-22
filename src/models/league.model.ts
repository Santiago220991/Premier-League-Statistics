
export interface League {
    LeagueData:      LeagueData;
    LeagueStandings: LeagueStanding[];
}

export interface LeagueData {
    id:      number;
    name:    Name;
    country: string;
    logo:    string;
    flag:    string;
    season:  number;
}

export enum Name {
    PremierLeague = "Premier League",
}

export interface LeagueStanding {
    rank:        number;
    team:        Team;
    points:      number;
    goalsDiff:   number;
    group:       Name;
    form:        string;
    status:      Status;
    description: null | string;
    all:         SideStatistics;
    home:        SideStatistics;
    away:        SideStatistics;
    update:      Date;
}

export interface SideStatistics {
    played: number;
    win:    number;
    draw:   number;
    lose:   number;
    goals:  Goals;
}

export interface Goals {
    for:     number;
    against: number;
}

export enum Status {
    Same = "same",
}

export interface Team {
    id:   number;
    name: string;
    logo: string;
}

