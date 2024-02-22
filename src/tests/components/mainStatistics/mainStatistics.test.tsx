import {MainStatisticsActions} from "./mainStatistics.testActions";

describe("MainStatistics ", () => {
    test("should render in the page", () => {
        const mainStatisticsComponent = MainStatisticsActions.renderComponent();
        mainStatisticsComponent.component.expect.toBeShown(
            "main-statistics-container",
        );
    });

    test("should contain a text", () => {
        const mainStatisticsComponent = MainStatisticsActions.renderComponent();
        mainStatisticsComponent.component.expect.toHasText(
            "main-statistics-container",
            "Rank: 1",
        );
        mainStatisticsComponent.component.expect.toHasText(
            "main-statistics-container",
            "Points: 89",
        );
        mainStatisticsComponent.component.expect.toHasText(
            "main-statistics-container",
            "Games Won: 28",
        );
        mainStatisticsComponent.component.expect.toHasText(
            "main-statistics-container",
            "Games Lost: 5",
        );
        mainStatisticsComponent.component.expect.toHasText(
            "main-statistics-container",
            "Goal Difference: 61",
        );
        mainStatisticsComponent.component.expect.toHasText(
          "main-statistics-container",
          "Manchester City",
      );
    });
});
