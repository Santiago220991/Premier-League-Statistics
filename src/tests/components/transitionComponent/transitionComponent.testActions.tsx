import React from "react";
import {act, render, screen} from "@testing-library/react";
import {TransitionComponent} from "../../../components";

const getComponentByTestId = (componentTestId: string) => {
    try {
        return screen.queryByTestId(componentTestId);
    } catch (error) {
        return null;
    }
};

export const TransitionComponentActions = {
    renderComponent: () => {
        jest.resetAllMocks();
        render(
            <TransitionComponent>
                <p>Test component</p>
            </TransitionComponent>,
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
                },
                switch: {
                    toggle: (testId: string) => {
                        act(() => {
                            const switchElement = getComponentByTestId(testId);
                            if (switchElement) {
                                switchElement.click();
                            }
                        });
                    },
                },
            },
        };
    },
};
