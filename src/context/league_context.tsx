import React, {SetStateAction} from "react";
import {createContext, useEffect, useMemo, useState} from "react";
import {LeagueData, LeagueStanding, SortValue} from "../models";
import {getLeagueStatisticsService} from "../services";
import {sortOptions} from "../utils";

interface LeagueContextValue {
    statistics: LeagueStanding[] | null;
    league: LeagueData | null;
    loading: boolean;
    setSearchName: React.Dispatch<SetStateAction<string>>;
    searchedStatistics: LeagueStanding[] | undefined;
    season: string;
    setSeason: React.Dispatch<SetStateAction<string>>;
    sortStandings: (sortValue: SortValue) => void;
    error: boolean | unknown;
}

const LeagueContext = createContext<LeagueContextValue>({
    statistics: null,
    league: null,
    loading: false,
    setSearchName: () => {},
    searchedStatistics: [],
    season: "",
    setSeason: () => {},
    sortStandings: () => {},
    error: false,
});

function LeagueProvider({children}: {children: React.ReactNode}) {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean | unknown>(false);
    const [statistics, setStatistics] = useState<LeagueStanding[] | null>(null);
    const [league, setLeague] = useState<LeagueData | null>(null);
    const [searchName, setSearchName] = useState<string>("");
    const [season, setSeason] = useState<string>("2023");

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

    const searchedStatistics = statistics?.filter(statistic =>
        statistic.team.name.toLowerCase().includes(searchName!),
    );

    useEffect(() => {
        getLeagueStatistics(season);
    }, [season]);

    const sortStandings = (sortValue: SortValue) => {
        const sortFunction = sortOptions[sortValue];
        if (sortFunction) {
            setStatistics([...statistics!.sort(sortFunction)]);
        }
    };

    const contextValue: LeagueContextValue = useMemo(
        () => ({
            loading,
            statistics,
            league,
            setSearchName,
            searchedStatistics,
            season,
            setSeason,
            sortStandings,
            error,
        }),
        [
            loading,
            statistics,
            league,
            setSearchName,
            searchedStatistics,
            season,
            setSeason,
            sortStandings,
            error,
        ],
    );

    return (
        <LeagueContext.Provider value={contextValue}>
            {children}
        </LeagueContext.Provider>
    );
}

export {LeagueProvider, LeagueContext};
