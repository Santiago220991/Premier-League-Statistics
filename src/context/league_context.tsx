import React from "react";
import {createContext, useEffect, useMemo, useState} from "react";
import {LeagueData, LeagueStanding} from "../models";
import {getLeagueStatisticsService} from "../services";

interface LeagueContextValue {
    statistics: LeagueStanding[] | null;
    league: LeagueData | null;
    loading: boolean;
}

const LeagueContext = createContext<LeagueContextValue>({
    statistics: null,
    league: null,
    loading: false,
});

function LeagueProvider({children}: {children: React.ReactNode}) {
    const [loading, setLoading] = useState<boolean>(true);
    const [statistics, setStatistics] = useState<LeagueStanding[] | null>(null);
    const [league, setLeague] = useState<LeagueData | null>(null);

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

    useEffect(() => {
        getLeagueStatistics();
    }, []);

    const contextValue: LeagueContextValue = useMemo(
        () => ({
            loading,
            statistics,
            league,
        }),
        [loading, statistics, league],
    );

    return (
        <LeagueContext.Provider value={contextValue}>
            {children}
        </LeagueContext.Provider>
    );
}

export {LeagueProvider, LeagueContext};
