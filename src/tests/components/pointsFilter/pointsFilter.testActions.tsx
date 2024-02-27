import React from "react";
import {render, screen} from "@testing-library/react";
import PointsFilter from "../../../components/pointsFilter/pointsFilter";

const getComponentByTestId = (componentTestId: string) => {
    try {
        return screen.queryByTestId(componentTestId);
    } catch (error) {
        return null;
    }
};

const mockLeagueContext = {
    pointsRate: 100, 
    setPointsRate: jest.fn(),
};

jest.mock("../../../hooks", () => ({
    useLeagueContext: () => mockLeagueContext
}))



export const PointsFilterActions = {
    renderComponent: () => {
        jest.resetAllMocks();
        render(<PointsFilter />);
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
