import React from "react";
import {render, screen} from "@testing-library/react";
import {Name, Status} from "../../../models";
import {Home} from "../../../pages";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const getComponentByTestId = (componentTestId: string) => {
    try {
        return screen.queryByTestId(componentTestId);
    } catch (error) {
        return null;
    }
};

const getComponentByRole = (componentRole: string) => {
    try {
        return screen.queryAllByRole(componentRole);
    } catch (error) {
        return null;
    }
};

const teamStatistics = [
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
        points: 84,
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

const mockLeagueContext = {
    searchedStatistics: teamStatistics,
    league: {
        logo: "https://example.com/logo.png",
    },
    season: "2023",
    sortValue: "Points_High"
};

jest.mock("../../../hooks", () => ({
    useLeagueContext: () => mockLeagueContext
}))

export const HomeActions = {
    renderComponent: () => {
        jest.resetAllMocks();
        render(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>,
        );
        return {
            component: {
                expect: {
                    toBeShown: (testId: string) => {
                        const component = getComponentByTestId(testId);
                        expect(component).toBeTruthy();
                    },
                    toHasText: (testId: string, text: string) => {
                        const component = getComponentByTestId(testId);
                        expect(component).toHaveTextContent(text);
                    },
                    toHasRole: (role: string, quantity: number) => {
                        const component = getComponentByRole(role);
                        expect(component).toHaveLength(quantity);
                    },
                },
            },
        };
    },
};
