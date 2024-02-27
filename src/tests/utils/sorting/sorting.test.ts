import {LeagueStanding, Name, Status} from "../../../models";
import {ByName, HigherToLower, LowerToHigher} from "../../../utils/sorting";

const standings: LeagueStanding[] = [
    {
        rank: 1,
        team: {
            id: 50,
            name: "Manchester City",
            logo: "https://media.api-sports.io/football/teams/50.png",
        },
        points: 89,
        goalsDiff: 61,
        group: Name.PremierLeague,
        form: "LDWWW",
        status: Status.Same,
        description: "Promotion - Champions League (Group Stage: )",
        all: {
            played: 38,
            win: 28,
            draw: 5,
            lose: 5,
            goals: {
                for: 94,
                against: 33,
            },
        },
        home: {
            played: 19,
            win: 17,
            draw: 1,
            lose: 1,
            goals: {
                for: 60,
                against: 17,
            },
        },
        away: {
            played: 19,
            win: 11,
            draw: 4,
            lose: 4,
            goals: {
                for: 34,
                against: 16,
            },
        },
        update: new Date(),
    },
    {
        rank: 2,
        team: {
            id: 42,
            name: "Arsenal",
            logo: "https://media.api-sports.io/football/teams/42.png",
        },
        points: 55,
        goalsDiff: 45,
        group: Name.PremierLeague,
        form: "WLLWW",
        status: Status.Same,
        description: "Promotion - Champions League (Group Stage: )",
        all: {
            played: 38,
            win: 26,
            draw: 6,
            lose: 6,
            goals: {
                for: 88,
                against: 43,
            },
        },
        home: {
            played: 19,
            win: 14,
            draw: 3,
            lose: 2,
            goals: {
                for: 53,
                against: 25,
            },
        },
        away: {
            played: 19,
            win: 12,
            draw: 3,
            lose: 4,
            goals: {
                for: 35,
                against: 18,
            },
        },
        update: new Date(),
    },
    {
        rank: 3,
        team: {
            id: 42,
            name: "Liverpool",
            logo: "https://media.api-sports.io/football/teams/40.png",
        },
        points: 55,
        goalsDiff: 45,
        group: Name.PremierLeague,
        form: "WLLWW",
        status: Status.Same,
        description: "Promotion - Champions League (Group Stage: )",
        all: {
            played: 38,
            win: 26,
            draw: 6,
            lose: 6,
            goals: {
                for: 88,
                against: 43,
            },
        },
        home: {
            played: 19,
            win: 14,
            draw: 3,
            lose: 2,
            goals: {
                for: 53,
                against: 25,
            },
        },
        away: {
            played: 19,
            win: 12,
            draw: 3,
            lose: 4,
            goals: {
                for: 35,
                against: 18,
            },
        },
        update: new Date(),
    },
];

describe("Sorting functions", () => {
    describe("LowerToHigher", () => {
        test("prioritizes points (lower to higher)", () => {
            standings.sort(LowerToHigher);

            expect(standings[0].points).toBe(55);
            expect(standings[1].points).toBe(55);
            expect(standings[2].points).toBe(89);
        });

        test("uses rank as tiebreaker for equal points", () => {
            standings.sort(LowerToHigher);

            expect(standings[0].points).toBe(55);
            expect(standings[1].points).toBe(55);
            expect(standings[0].rank).toBe(3); // Team B with lower rank is first
            expect(standings[1].rank).toBe(2);
        });
    });

    describe("HigherToLower", () => {
        test("prioritizes points (higher to lower)", () => {
            standings.sort(HigherToLower);

            expect(standings[0].points).toBe(89);
            expect(standings[1].points).toBe(55);
            expect(standings[2].points).toBe(55);
        });

        test("uses rank as tiebreaker for equal points", () => {
            standings.sort(HigherToLower);

            expect(standings[1].points).toBe(55);
            expect(standings[2].points).toBe(55);
            expect(standings[1].rank).toBe(2); // Team B with lower rank is first
            expect(standings[2].rank).toBe(3);
        });
    });

    describe("ByName", () => {
        test("sorts alphabetically by team name", () => {
            standings.sort(ByName);

            expect(standings[0].team.name).toBe("Arsenal");
            expect(standings[1].team.name).toBe("Liverpool");
            expect(standings[2].team.name).toBe("Manchester City");
        });
    });
});
