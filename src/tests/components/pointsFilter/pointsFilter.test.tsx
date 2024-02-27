import {PointsFilterActions} from "./pointsFilter.testActions";

describe("PointsFilter ", () => {
    test("should render in the page", () => {
        const pointsFilterComponent = PointsFilterActions.renderComponent();
        pointsFilterComponent.component.expect.toBeShown(
            "pointsFilter-container",
        );
    });
});
