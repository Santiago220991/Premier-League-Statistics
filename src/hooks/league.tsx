import { useContext } from 'react';
import { LeagueContext } from '../context';

const useLeagueContext = () => {
  const context = useContext(LeagueContext);
  if (!context) {
    throw new Error('useLeagueContext must be used within a LeagueProvider');
  }
  return context;
};

export default useLeagueContext;
