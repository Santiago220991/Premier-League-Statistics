import axios from "axios";
import {League} from "../models/league";
import { APIURL, KEY, HOST } from '../constants/api'

const getLeagueStatisticsService = async (): Promise<League> => {
    try {
        const response = await axios.get(`${APIURL}`, {
            headers: {
                "x-rapidapi-host": HOST,
                "x-rapidapi-key": KEY,
            },
        });
        console.log(response.data.response[0].league.standings)
        const LeagueData = response.data.response[0].league;
        const LeagueStandings = response.data.response[0].league.standings[0];
        delete LeagueData["standings"];
        const SeasonLeague = {LeagueData, LeagueStandings};
        return SeasonLeague;
    } catch {
        throw new Error("Error getting data from the API");
    }
};

export default getLeagueStatisticsService;
