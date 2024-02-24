/* eslint-disable  @typescript-eslint/no-explicit-any */

import axios from "axios";
import {APIURL} from "../../constants/api";
import {getLeagueStatisticsService} from "../../services";

const mockResponse = {
    data: {
        response: [
            {
                league: {
                    id: 39,
                    name: "Premier League",
                    standings: [
                        [
                            {rank: "1", team: {name: "team1"}},
                            {rank: "2", team: {name: "team2"}},
                        ],
                    ],
                },
            },
        ],
    },
};

const expectedResponse = {
    LeagueData: {
        id: 39,
        name: "Premier League",
    },
    LeagueStandings: [
        {rank: "1", team: {name: "team1"}},
        {rank: "2", team: {name: "team2"}},
    ],
};

jest.mock("axios");

describe("getLeagueStatisticsService", () => {
    beforeEach(() => {
        (axios.get as jest.Mock).mockResolvedValue(mockResponse);
    });

    it("should return a League object on successful response", async () => {
        const season="2023"
        const response = await getLeagueStatisticsService(season);

        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(`${APIURL}${season}`, expect.anything());
        expect(response).toEqual(expectedResponse);
    });

    it("should throw an error on network error", async () => {
        (axios.get as jest.Mock).mockRejectedValue(new Error("Network error"));
        try {
            await getLeagueStatisticsService("2023");
            fail("Function did not throw error");
        } catch (error: unknown | any) {
            expect(error?.message).toBe("Error getting data from the API");
        }
    });
});
