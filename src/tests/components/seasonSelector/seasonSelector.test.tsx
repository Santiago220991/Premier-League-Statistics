import {SeasonSelectorActions} from "./seasonSelector.testActions";

describe("SeasonSelector ", () => {
    test("should render in the page", () => {
        const seasonSelectorComponent = SeasonSelectorActions.renderComponent();
        seasonSelectorComponent.component.expect.toBeShown(
            "seasonSelector-container",
        );
    });
});
