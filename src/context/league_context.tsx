import React, {SetStateAction} from "react";
import {createContext, useEffect, useMemo, useState} from "react";
import {LeagueData, LeagueStanding, SortValue} from "../models";
import {getLeagueStatisticsService} from "../services";
import {sortOptions} from "../utils";

interface LeagueContextValue {
    statistics: LeagueStanding[] | null;
    league: LeagueData | null;
    loading: boolean;
    searchName: string;
    setSearchName: React.Dispatch<SetStateAction<string>>;
    searchedStatistics: LeagueStanding[] | undefined;
    season: string;
    setSeason: React.Dispatch<SetStateAction<string>>;
    sortStandings: (sortValue: SortValue) => void;
    error: boolean | unknown;
    setPointsRate: React.Dispatch<SetStateAction<number>>;
    pointsRate: number;
    sortValue: SortValue;
    setSortValue: React.Dispatch<SetStateAction<SortValue>>;
}

const LeagueContext = createContext<LeagueContextValue>({
    statistics: null,
    league: null,
    loading: false,
    searchName: "",
    setSearchName: () => {},
    searchedStatistics: [],
    season: "",
    setSeason: () => {},
    sortStandings: () => {},
    error: false,
    setPointsRate: () => {},
    pointsRate: 0,
    setSortValue: () => {},
    sortValue: "Points_High",
});

function LeagueProvider({children}: {children: React.ReactNode}) {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean | unknown>(false);
    const [statistics, setStatistics] = useState<LeagueStanding[] | null>(null);
    const [league, setLeague] = useState<LeagueData | null>(null);
    const [searchName, setSearchName] = useState<string>("");
    const [season, setSeason] = useState<string>("2023");
    const [pointsRate, setPointsRate] = useState<number>(100);
    const [sortValue, setSortValue] = useState<SortValue>("Points_High");

    const getLeagueStatistics = async (season: string) => {
        setLoading(true);
        try {
            const response = await getLeagueStatisticsService(season);
            setLeague(response.LeagueData);
            setStatistics(response.LeagueStandings);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const filteredStatistics = statistics?.filter(standing => {
        const pointsCheck = pointsRate === 0 || standing.points <= pointsRate;
        return pointsCheck;
    });

    const searchedStatistics = filteredStatistics?.filter(statistic =>
        statistic.team.name.toLowerCase().includes(searchName!),
    );

    useEffect(() => {
        getLeagueStatistics(season);
        setSortValue("Points_High")
    }, [season]);

    const sortStandings = (sortValue: SortValue) => {
        const sortFunction = sortOptions[sortValue];
        if (sortFunction && statistics) {
            setStatistics([...statistics.sort(sortFunction)]);
        }
    };

    const contextValue: LeagueContextValue = useMemo(
        () => ({
            loading,
            statistics,
            league,
            setSearchName,
            searchName,
            searchedStatistics,
            season,
            setSeason,
            sortStandings,
            error,
            setPointsRate,
            pointsRate,
            setSortValue,
            sortValue,
        }),
        [
            loading,
            statistics,
            league,
            setSearchName,
            searchName,
            searchedStatistics,
            season,
            setSeason,
            sortStandings,
            error,
            setPointsRate,
            pointsRate,
            setSortValue,
            sortValue,
        ],
    );

    return (
        <LeagueContext.Provider value={contextValue}>
            {children}
        </LeagueContext.Provider>
    );
}

export {LeagueProvider, LeagueContext};
