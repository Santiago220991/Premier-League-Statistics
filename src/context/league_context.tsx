import React  from 'react';
import {createContext, useEffect, useMemo, useState} from "react";
import getLeagueStatisticsService from "../services/statistics";
import { LeagueData, LeagueStanding } from "../models/league";

interface LeagueContextValue {
  statistics: LeagueStanding[]|null
  league: LeagueData|null;
}

const LeagueContext = createContext<LeagueContextValue>({
  statistics: null,
  league: null,
});

function LeagueProvider({children}: {children: React.ReactNode}) {
  const [loading, setLoading] = useState<boolean>(true);
  const [statistics, setStatistics] = useState<LeagueStanding[]|null>(null);
  const [league, setLeague] = useState<LeagueData|null>(null);

  const getLeagueStatistics = async () => {
    setLoading(true);
    try {
      const response = await getLeagueStatisticsService();
      setLeague(response.LeagueData)
      setStatistics(response.LeagueStandings)
    } catch (err) {
      console.log(err)
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

export default LeagueProvider;