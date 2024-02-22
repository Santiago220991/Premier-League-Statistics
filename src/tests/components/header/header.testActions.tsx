import React from "react";
import {render, screen} from "@testing-library/react";
import { Header } from "../../../components";

const getComponentByTestId = (componentTestId: string) => {
    try {
        return screen.queryByTestId(componentTestId);
    } catch (error) {
        return null;
    }
};

export const HeaderActions = {
    renderComponent: () => {
        jest.resetAllMocks();
        render(<Header />);
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
