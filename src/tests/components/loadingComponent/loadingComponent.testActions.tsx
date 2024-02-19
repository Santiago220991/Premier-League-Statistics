import React from "react";
import {render, screen} from "@testing-library/react";
import {LoadingComponent} from "../../../components";

const getComponentByTestId = (componentTestId: string) => {
    try {
        return screen.queryByTestId(componentTestId);
    } catch (error) {
        return null;
    }
};

export const LoadingComponentActions = {
    renderComponent: () => {
        jest.resetAllMocks();
        render(<LoadingComponent />);
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
