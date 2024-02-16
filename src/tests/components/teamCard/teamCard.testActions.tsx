import React from "react"
import {render, screen} from "@testing-library/react";
import { Name, Status } from "../../../models";
import TeamCard from "../../../components/teamCard/teamCard";

const getComponentByTestId = (componentTestId: string) => {
    try {
        return screen.queryByTestId(componentTestId);
    } catch (error) {
        return null;
    }
};

const teamStatistics = {
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
};

export const TeamCardActions = {
    renderComponent: () => {
        jest.resetAllMocks();
        render(<TeamCard teamStatistics={teamStatistics} />);
        return {
            component: {
                expect: {
                    toBeShown: (testId: string) => {
                        const component = getComponentByTestId(testId);
                        expect(component).toBeTruthy();
                    },
                    toHasText:(testId: string, text: string) => {
                        const component = getComponentByTestId(testId);
                        expect(component).toHaveTextContent(text)
                    }
                },
            },
        };
    },
};
