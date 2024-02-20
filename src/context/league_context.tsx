import React, {SetStateAction} from "react";
import {createContext, useEffect, useMemo, useState} from "react";
import {LeagueData, LeagueStanding} from "../models";
import {getLeagueStatisticsService} from "../services";

interface LeagueContextValue {
    statistics: LeagueStanding[] | null;
    league: LeagueData | null;
    loading: boolean;
    setSearchName: React.Dispatch<SetStateAction<string>>;
    searchedStatistics: LeagueStanding[] | undefined;
}

const LeagueContext = createContext<LeagueContextValue>({
    statistics: null,
    league: null,
    loading: false,
    setSearchName: () => {},
    searchedStatistics: [],
});

function LeagueProvider({children}: {children: React.ReactNode}) {
    const [loading, setLoading] = useState<boolean>(true);
    const [statistics, setStatistics] = useState<LeagueStanding[] | null>(null);
    const [league, setLeague] = useState<LeagueData | null>(null);
    const [searchName, setSearchName] = useState<string>("");

    const getLeagueStatistics = async () => {
        setLoading(true);
        try {
            const response = await getLeagueStatisticsService();
            setLeague(response.LeagueData);
            setStatistics(response.LeagueStandings);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    const searchedStatistics = statistics?.filter(statistic =>
        statistic.team.name.toLowerCase().includes(searchName!),
    );

    useEffect(() => {
        getLeagueStatistics();
    }, []);

    const contextValue: LeagueContextValue = useMemo(
        () => ({
            loading,
            statistics,
            league,
            setSearchName,
            searchedStatistics,
        }),
        [loading, statistics, league, setSearchName, searchedStatistics],
    );

    return (
        <LeagueContext.Provider value={contextValue}>
            {children}
        </LeagueContext.Provider>
    );
}

export {LeagueProvider, LeagueContext};
