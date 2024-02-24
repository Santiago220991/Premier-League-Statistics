import React from "react";
import {render, screen} from "@testing-library/react";
import { SeasonSelector } from "../../../components";

const getComponentByTestId = (componentTestId: string) => {
    try {
        return screen.queryByTestId(componentTestId);
    } catch (error) {
        return null;
    }
};

const mockLeagueContext = {
    season: "2023",
    setSeason: jest.fn(),
};

jest.mock("../../../hooks", () => ({
    useLeagueContext: () => mockLeagueContext
}))

export const SeasonSelectorActions = {
    renderComponent: () => {
        jest.resetAllMocks();
        render(<SeasonSelector />);
        return {
            component: {
                expect: {
                    toBeShown: (testId: string) => {
                        const component = getComponentByTestId(testId);
                        expect(component).toBeTruthy();
                    },
                },
            },
        };
    },
};
