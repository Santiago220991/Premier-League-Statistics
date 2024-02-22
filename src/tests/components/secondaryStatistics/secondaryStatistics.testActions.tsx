import React from "react"
import {render, screen} from "@testing-library/react";
import { SecondaryStatistics } from "../../../components";
import { SideStatistics } from "../../../models";

const getComponentByTestId = (componentTestId: string) => {
    try {
        return screen.queryByTestId(componentTestId);
    } catch (error) {
        return null;
    }
};

const sideStatistics:SideStatistics = {
        played: 19,
        win: 17,
        draw: 1,
        lose: 1,
        goals: {
            for: 60,
            against: 17,
        },
    }

export const SecondaryStatisticsActions = {
    renderComponent: () => {
        jest.resetAllMocks();
        render(<SecondaryStatistics sideStatistics={sideStatistics} />);
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
