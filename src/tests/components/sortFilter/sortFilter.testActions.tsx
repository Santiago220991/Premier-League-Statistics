import React from "react";
import {render, screen} from "@testing-library/react";
import {SortFilter} from "../../../components";

const getComponentByTestId = (componentTestId: string) => {
    try {
        return screen.queryByTestId(componentTestId);
    } catch (error) {
        return null;
    }
};

const mockLeagueContext = {
    setSortFilter: jest.fn(),
    sortValue: "Points_High"
};

jest.mock("../../../hooks", () => ({
    useLeagueContext: () => mockLeagueContext,
}));

export const SortFilterActions = {
    renderComponent: () => {
        jest.resetAllMocks();
        render(<SortFilter />);
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
