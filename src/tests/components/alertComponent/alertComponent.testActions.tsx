import React from "react";
import {render, screen} from "@testing-library/react";
import { AlertComponent } from "../../../components";

const getComponentByTestId = (componentTestId: string) => {
    try {
        return screen.queryByTestId(componentTestId);
    } catch (error) {
        return null;
    }
};

const error= new Error("Error message");

export const AlertComponentActions = {
    renderComponent: () => {
        jest.resetAllMocks();
        render(<AlertComponent severity="error" error={error} />);
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
