import {SecondaryStatisticsActions} from "./secondaryStatistics.testActions";

describe("SecondaryStatistics ", () => {
    test("should render in the page", () => {
        const SecondaryStatisticsComponent =
            SecondaryStatisticsActions.renderComponent();
        SecondaryStatisticsComponent.component.expect.toBeShown(
            "secondary-statistics-container",
        );
    });

    test("should contain a text", () => {
        const SecondaryStatisticsComponent =
            SecondaryStatisticsActions.renderComponent();
        SecondaryStatisticsComponent.component.expect.toHasText(
            "secondary-statistics-container",
            "GAMES19",
        );
        SecondaryStatisticsComponent.component.expect.toHasText(
            "secondary-statistics-container",
            "WON17",
        );
        SecondaryStatisticsComponent.component.expect.toHasText(
            "secondary-statistics-container",
            "LOST1",
        );
        SecondaryStatisticsComponent.component.expect.toHasText(
            "secondary-statistics-container",
            "DRAW1",
        );
    });
});
