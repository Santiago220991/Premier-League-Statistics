import React from "react";
import {render, screen} from "@testing-library/react";
import SearchBar from "../../../components/searchBar/searchBar";

const getComponentByTestId = (componentTestId: string) => {
    try {
        return screen.queryByTestId(componentTestId);
    } catch (error) {
        return null;
    }
};

export const SearchBarActions = {
    renderComponent: () => {
        jest.resetAllMocks();
        render(<SearchBar />);
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
